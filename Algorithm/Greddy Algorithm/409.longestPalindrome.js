/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = new Map();
  for (const char of s) {
    map.set(char, map.get(char) + 1 || 1);
  }

  let maxLength = 0;

  [...map.keys()].forEach((key) => {
    const currentLength = map.get(key);

    if (currentLength % 2 === 0) maxLength += currentLength;
    else if (maxLength % 2 === 0) maxLength += currentLength;
    else maxLength += currentLength - 1;
  });

  return maxLength;
};
