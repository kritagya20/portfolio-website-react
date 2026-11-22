/**
 * Formats a number with its ordinal suffix (1st, 2nd, 3rd, 4th...).
 * 
 * @param {number|string} n - Number to format
 * @param {string} [fallback='106th'] - Fallback string if invalid
 * @returns {string} Ordinal string
 */
export function getOrdinalString(n, fallback = '106th') {
  if (n === null || n === undefined || isNaN(n)) return fallback;
  const num = Number(n);
  const formattedNum = num.toLocaleString();
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${formattedNum}st`;
  }
  if (lastDigit === 2 && lastTwoDigits !== 12) {
    return `${formattedNum}nd`;
  }
  if (lastDigit === 3 && lastTwoDigits !== 13) {
    return `${formattedNum}rd`;
  }
  return `${formattedNum}th`;
}

