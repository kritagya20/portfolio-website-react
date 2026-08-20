import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const statsFilePath = path.resolve(__dirname, '../../public/visitor-stats.json');

async function updateVisitorStats() {
  const token = process.env.TRAFFIC_TOKEN || process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY || 'kritagya20/portfolio-website-react';

  console.log(`[Visitor Stats] Target repository: ${repository}`);
  
  let statsData = {
    lastUpdated: new Date().toISOString(),
    baseViews: 0,
    baseUniques: 0,
    totalViews: 0,
    totalUniques: 0,
    daily: {}
  };

  if (fs.existsSync(statsFilePath)) {
    try {
      const fileContent = fs.readFileSync(statsFilePath, 'utf8');
      const parsed = JSON.parse(fileContent);
      statsData = { ...statsData, ...parsed };
      if (!statsData.daily) statsData.daily = {};
    } catch (err) {
      console.warn('[Visitor Stats] Failed to parse existing stats file. Using default baseline.', err.message);
    }
  }

  let apiSuccess = false;

  if (token) {
    try {
      console.log('[Visitor Stats] Fetching traffic view metrics from GitHub API...');
      const response = await fetch(`https://api.github.com/repos/${repository}/traffic/views`, {
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      if (response.ok) {
        const trafficData = await response.json();
        const viewsList = trafficData.views || [];
        console.log(`[Visitor Stats] GitHub API returned ${viewsList.length} daily entries. Total 14-day count: ${trafficData.count}, Uniques: ${trafficData.uniques}`);

        viewsList.forEach(entry => {
          const dateStr = entry.timestamp.split('T')[0];
          statsData.daily[dateStr] = {
            views: entry.count,
            uniques: entry.uniques
          };
        });

        apiSuccess = true;
      } else {
        const errorText = await response.text();
        console.warn(`[Visitor Stats] GitHub API returned status ${response.status}: ${errorText}`);
      }
    } catch (err) {
      console.warn('[Visitor Stats] Network error during GitHub API fetch:', err.message);
    }
  } else {
    console.warn('[Visitor Stats] No TRAFFIC_TOKEN or GITHUB_TOKEN environment variable found.');
  }

  // Fallback estimation if API fetch was unsuccessful
  if (!apiSuccess) {
    console.log('[Visitor Stats] Running fallback estimation for view increments...');
    const dates = Object.keys(statsData.daily).sort();
    
    let avgViewsPerDay = 5; // Default fallback if no history exists yet
    if (dates.length > 0) {
      const recentDates = dates.slice(-14);
      const sumRecentViews = recentDates.reduce((acc, dateKey) => acc + (statsData.daily[dateKey]?.views || 0), 0);
      avgViewsPerDay = Math.max(1, Math.round(sumRecentViews / recentDates.length));
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (!statsData.daily[todayStr]) {
      statsData.daily[todayStr] = {
        views: avgViewsPerDay,
        uniques: Math.max(1, Math.round(avgViewsPerDay * 0.6)),
        estimated: true
      };
      console.log(`[Visitor Stats] Estimated ${avgViewsPerDay} views for today (${todayStr}).`);
    }
  }

  // Recalculate total cumulative views & uniques by summing all daily entries stored in daily map
  let dailyViewsSum = 0;
  let dailyUniquesSum = 0;
  
  Object.values(statsData.daily).forEach(day => {
    dailyViewsSum += (day.views || 0);
    dailyUniquesSum += (day.uniques || 0);
  });

  const baseViews = Number(statsData.baseViews) || 0;
  const baseUniques = Number(statsData.baseUniques) || 0;

  statsData.totalViews = baseViews + dailyViewsSum;
  statsData.totalUniques = baseUniques + dailyUniquesSum;
  statsData.lastUpdated = new Date().toISOString();

  fs.writeFileSync(statsFilePath, JSON.stringify(statsData, null, 2), 'utf8');
  console.log(`[Visitor Stats] Successfully updated visitor-stats.json! Total Views = ${statsData.totalViews} (Base: ${baseViews} + Stored Daily Sum: ${dailyViewsSum}), Total Uniques = ${statsData.totalUniques}`);
}

updateVisitorStats().catch(err => {
  console.error('[Visitor Stats] Critical error in update script:', err);
  process.exit(1);
});
