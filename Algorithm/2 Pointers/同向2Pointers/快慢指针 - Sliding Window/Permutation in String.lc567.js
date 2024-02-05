/**
 * @param {string} t
 * @param {string} s
 * @return {boolean}
 */
/* ------------------------  Solution1: 低效的方法 ------------------------------------------- */
const getFrequency = (str) => {
  let lookUp = {};
  for (let char of str) {
    lookUp[char] = (lookUp[char] || 0) + 1;
  }
  return lookUp;
};
const isEqual = (obj1, obj2) => {
  let obj1Len = Object.keys(obj1).length;
  let obj2Len = Object.keys(obj2).length;

  if (obj1Len === obj2Len) {
    return Object.keys(obj1).every((key) => {
      return obj2.hasOwnProperty(key) && obj2[key] === obj1[key];
    });
  }
  return false;
};
var checkInclusion = function (t, s) {
  // create hash for t, to track the frequency of each char
  const hash = getFrequency(t);

  let i = 0;
  let j = t.length; // j-i 是窗口大小

  for (i; i <= s.length - t.length; i++) {
    const obj = getFrequency(s.substring(i, i + j));
    if (isEqual(obj, hash)) return true;
  }
  return false;
};

/* ------------------------  Solution2: 比较高效  ------------------------------------------- */
const isMatch = (a, b) => JSON.stringify(a) == JSON.stringify(b);

var checkInclusion = function (t, s) {
  let mapS1 = Array(26).fill(0);
  let mapS2 = Array(26).fill(0);

  let s1Len = t.length;
  let s2Len = s.length;

  // inilize 2 array map:
  for (let i = 0; i < s1Len; i++) {
    mapS1[t.charCodeAt(i) - 97] += 1;
    mapS2[s.charCodeAt(i) - 97] += 1;
  }

  for (let j = 0; j <= s2Len - s1Len; j++) {
    if (isMatch(mapS1, mapS2)) return true;
    else {
      // sliding window is here:  (fixed length)
      mapS2[s.charCodeAt(j + s1Len) - 97] += 1;
      mapS2[s.charCodeAt(j) - 97] -= 1;
    }
  }

  return false;
};

/* ------------------------  Solution3: 👍 Slding window - LC76, 438变形题  ------------------------------------------- */
var checkInclusion = function (t, s) {
  if (t.length > s.length) return false;

  const needs = new Map();
  for (let char of t) {
    needs.set(char, needs.get(char) + 1 || 1);
  }

  const window = new Map();
  let slow = 0;
  let fast = 0;
  let valid = 0;
  while (fast < s.length) {
    let c = s[fast];
    fast++;
    if (needs.has(c)) {
      window.set(c, window.get(c) + 1 || 1);
      if (window.get(c) === needs.get(c)) valid += 1;
    }

    //不同点：缩小窗口的时机是窗口>= t.length 时，因为排列嘛，显然长度应该是一样的。
    while (fast - slow >= t.length) {
      if (valid === needs.size) return true;

      let d = s[slow];
      slow++;
      if (needs.has(d)) {
        if (window.get(d) === needs.get(d)) valid -= 1;
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return false;
};
