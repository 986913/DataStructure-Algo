/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;

  let result = '';
  while (p1 < word1.length && p2 < word2.length) {
    result += word1[p1];
    result += word2[p2];
    p1++;
    p2++;
  }

  if (p1 < word1.length) {
    result += word1.substring(p1);
  }
  if (p2 < word2.length) {
    result += word2.substring(p2);
  }

  return result;
};
