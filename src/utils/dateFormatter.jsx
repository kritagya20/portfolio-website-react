import { useState, useEffect } from 'react';

/**
 * Common date formatting utility for responsive timeline dates across the site.
 * 
 * Transforms standard dates into space-saving compact forms:
 *   - "2026" -> "26" (or "'26")
 *   - "Oct 2023" -> "Oct23" (or "Oct'23")
 *   - "Feb 2026 – Present" -> "Feb26 – Present"
 *   - "Dec 2024 – Feb 2026" -> "Dec24 – Feb26"
 * 
 * @param {string} dateStr - Raw date string
 * @param {Object} [options]
 * @param {boolean} [options.compact=true] - Whether to apply compact trimming
 * @param {boolean} [options.apostrophe=false] - Whether to include an apostrophe before the 2-digit year
 * @returns {string} Formatted date string
 */
export function formatTimelineDate(dateStr, options = {}) {
  const { compact = true, apostrophe = false } = options;
  if (!dateStr || typeof dateStr !== 'string') return '';
  if (!compact) return dateStr;

  const prefix = apostrophe ? "'" : '';

  // 1. Match Month followed by 4-digit 20XX year: "Oct 2023" -> "Oct23" or "Oct'23"
  let result = dateStr.replace(
    /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\s+(?:20)(\d{2})\b/gi,
    (match, month, year2d) => {
      const cleanMonth = month.charAt(0).toUpperCase() + month.slice(1, 3).toLowerCase();
      return `${cleanMonth}${prefix}${year2d}`;
    }
  );

  // 2. Match any remaining standalone 4-digit 20XX years: "2026" -> "26" or "'26"
  result = result.replace(/\b(?:20)(\d{2})\b/g, (match, y) => `${prefix}${y}`);

  // 3. Normalize spacing around range hyphens / en-dashes: e.g. " – "
  result = result.replace(/\s*–\s*/g, ' – ');

  return result;
}

/**
 * Checks if a timeline date indicates an active current tenure
 */
export function isCurrentRole(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return false;
  return /present|current|now/i.test(dateStr);
}

/**
 * React hook to reactively get formatted date string based on window viewport width
 */
export function useResponsiveDate(dateStr, options = {}) {
  const { breakpoint = 768, apostrophe = false } = options;
  const [isSmall, setIsSmall] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= breakpoint;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = (e) => setIsSmall(e.matches);

    setIsSmall(media.matches);
    if (media.addEventListener) {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    } else {
      media.addListener(update);
      return () => media.removeListener(update);
    }
  }, [breakpoint]);

  return formatTimelineDate(dateStr, { compact: isSmall, apostrophe });
}

/**
 * Declarative component for responsive timeline date display (zero CLS via CSS)
 */
export function ResponsiveTimelineDate({ date, apostrophe = false, className = '' }) {
  if (!date) return null;
  const full = date;
  const compact = formatTimelineDate(date, { compact: true, apostrophe });

  return (
    <span className={`responsive-timeline-date ${className}`}>
      <span className="date-full">{full}</span>
      <span className="date-compact">{compact}</span>
    </span>
  );
}
