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
    totalViews: 100,
    totalUniques: 45,
    daily: {}
  };

  if (fs.existsSync(statsFilePath)) {
    try {
      const fileContent = fs.readFileSync(statsFilePath, 'utf8');
      statsData = { ...statsData, ...JSON.parse(fileContent) };
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
        console.log(`[Visitor Stats] Successfully fetched ${viewsList.length} days of traffic data.`);

        viewsList.forEach(entry => {
          // Format timestamp ISO string (e.g. 2026-08-20T00:00:00Z) to YYYY-MM-DD
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

  // Recalculate totals across all stored daily entries
  let calculatedViews = 0;
  let calculatedUniques = 0;
  
  Object.values(statsData.daily).forEach(day => {
    calculatedViews += day.views || 0;
    calculatedUniques += day.uniques || 0;
  });

  // Preserve initial baseline offset if total historical views exceeds calculated daily sums
  statsData.totalViews = Math.max(statsData.totalViews || 0, calculatedViews);
  statsData.totalUniques = Math.max(statsData.totalUniques || 0, calculatedUniques);
  statsData.lastUpdated = new Date().toISOString();

  fs.writeFileSync(statsFilePath, JSON.stringify(statsData, null, 2), 'utf8');
  console.log(`[Visitor Stats] Updated stats file successfully: Total Views = ${statsData.totalViews}, Total Uniques = ${statsData.totalUniques}`);
}

updateVisitorStats().catch(err => {
  console.error('[Visitor Stats] Critical error in update script:', err);
  process.exit(1);
});
