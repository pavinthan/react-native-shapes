/**
 * Find a string between two strings.
 * @param string
 * @param start
 * @param end
 */
export const strBetween = (string, start, end) => {
  // Create the regular expression to match the string.
  const regex = new RegExp(
    `(?:${start})${end ? `(.*?)(?:${end})` : '(.*)'}`,
    'igm'
  );
  // Find the matched results
  const results = regex.exec(string.toLowerCase());
  // returning the result
  return (results ? results[1] || '' : '').trim();
};
