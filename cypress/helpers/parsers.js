/** Parse displayed price text to number (e.g. "26 990 Kč" → 26990) */
function parsePrice(text) {
  return parseInt(text.replace(/\s/g, '').replace(/Kč.*/, ''), 10);
}

/** Parse displayed count text to number (e.g. "3 761 pronájmů" → 3761) */
function parseCount(text) {
  const match = text.match(/[\d\s]+/);
  if (!match) return 0;
  return parseInt(match[0].replace(/\s/g, ''), 10);
}

module.exports = { parsePrice, parseCount };
