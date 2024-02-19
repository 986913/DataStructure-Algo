/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
/*********************************** Solution: 2 pointer s*******************************************/
var camelMatch = function (queries, pattern) {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    result.push(isMatch(queries[i], pattern));
  }
  return result;
};

// helper function:
const isMatch = (str, pattern) => {
  let i = 0; // i is for str
  let j = 0; // j is for pattern

  while (i < str.length && j < pattern.length) {
    if (str[i] === pattern[j]) {
      i++;
      j++;
    } else {
      if (str[i] >= 'A' && str[i] <= 'Z') return false;
      i++;
    }
  }

  // Check if there are remaining uppercase letters in str
  while (i < str.length) {
    if (str[i] >= 'A' && str[i] <= 'Z') return false;
    i++;
  }

  return j === pattern.length; // 检查是否已经遍历完了pattern。如果j等于 pattern.length，则表示pattern中的所有字符都已经匹配成功，因此返回true，否则返回 false。
};
