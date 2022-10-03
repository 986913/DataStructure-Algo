/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution1：
var isAnagram = function (s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  return sortedS === sortedT;
};

// Solution2: use map
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.get(t[i]) - 1);
    if (map.get(t[i]) <= 0) map.delete(t[i]);
  }

  return map.size === 0;
};
