/**
 * @param {string} s
 * @return {number}
 */
/******************** Solution 1: double ForLoop 暴力法 ****************************************/
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let apperCount = 1;
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[j] === s[i]) apperCount += 1;
    }
    if (apperCount === 1) return i;
  }

  return -1; // no unique char in s
};

/******************** Solution 2: Hash Map ****************************************/
var firstUniqChar = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  for (let [key, val] of map) {
    if (val === 1) return s.indexOf(key);
  }

  return -1; // no unique char in s
};
