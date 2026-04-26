// Utility to find start/end indices for all occurrences of a phrase in a string
export function findHighlightRanges(text, phrases, classNames) {
  const highlights = [];
  phrases.forEach((phrase, idx) => {
    let start = 0;
    while (true) {
      const found = text.indexOf(phrase, start);
      if (found === -1) break;
      highlights.push({
        start: found,
        end: found + phrase.length,
        className: classNames[idx],
      });
      start = found + phrase.length;
    }
  });
  return highlights;
}
