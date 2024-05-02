/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

/******************************** Solution 1: Two Pass ************************************/
/**
  Loop from left to get NEAREST distance from LEFT.
  Then loop from right again, update the MINIMUM of two.
    s="loveleetcode", c="e":
                  l          o        v    e l e e t c o d e
    from left   Infinity Infinity Infinity 0 1 0 0 1 2 3 4 0
    from right    3          2        1    0 1 0 0 4 3 2 1 0
    MIN           3          2        1    0 1 0 0 1 2 2 1 0

    s="aaab", c="b":
                  a          a         b        a
    from left   Infinity  Infinity     0        1
    from right    2          1         0       Infinity
    MIN           2          1         0        1
 */
var shortestToChar = function (s, c) {
  const result = [];

  // 从左到右处理
  let lastCIndex = -Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      lastCIndex = i;
    }
    result[i] = i - lastCIndex;
  }

  // 从右到左处理
  lastCIndex = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      lastCIndex = i;
    }
    result[i] = Math.min(result[i], lastCIndex - i);
  }

  return result;
};

/******************************** Solution 2 ************************************/
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let cPositions = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) cPositions.push(i);
  }

  let p = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < cPositions[0]) result.push(cPositions[0] - i);
    else if (i > cPositions[cPositions.length - 1])
      result.push(i - cPositions[cPositions.length - 1]);
    else if (i === cPositions[p]) {
      result.push(0);
      p++;
    } else result.push(Math.min(cPositions[p] - i, i - cPositions[p - 1]));
  }

  return result;
};
