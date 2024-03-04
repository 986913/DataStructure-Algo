/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

/************************************  hashtable : LC 205 变形题  ************************************************/

var wordPattern = function (pattern, s) {
  let sArr = s.split(' ');
  if (pattern.length !== sArr.length) return false;

  let map = new Map();
  let tracker = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let str = sArr[i];

    if (!map.has(char)) {
      map.set(char, str);
    } else {
      if (map.get(char) !== str) return false;
    }

    if (!tracker.has(str)) {
      tracker.set(str, char);
    } else {
      if (tracker.get(str) !== char) return false;
    }
  }

  return true;
};
