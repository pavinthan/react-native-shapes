export const strBetween = (string, start, end) => {
  // create regular expression
  const regex = new RegExp(
    `(?:${start})${end ? `(.*?)(?:${end})` : '(.*)'}`,
    'igm'
  );
  // match in string
  const results = regex.exec(string.toLowerCase());
  // return only matched word
  return (results ? results[1] || '' : '').trim();
};
