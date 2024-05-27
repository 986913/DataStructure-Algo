/**
 * @param {string} target
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
var checkInclusion = function (target, s) {
  // create hash for target, to track the frequency of each char
  const hash = getFrequency(target);

  let i = 0;
  let j = target.length; // j-i 是窗口大小

  for (i; i <= s.length - target.length; i++) {
    const obj = getFrequency(s.substring(i, i + j));
    if (isEqual(obj, hash)) return true;
  }
  return false;
};

/* ------------------------  Solution2: 比较高效  ------------------------------------------- */
const isMatch = (a, b) => JSON.stringify(a) == JSON.stringify(b);

var checkInclusion = function (target, s) {
  let mapS1 = Array(26).fill(0);
  let mapS2 = Array(26).fill(0);

  let s1Len = target.length;
  let s2Len = s.length;

  // inilize 2 array map:
  for (let i = 0; i < s1Len; i++) {
    mapS1[target.charCodeAt(i) - 97] += 1;
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

/* ------------------------  Solution3: 👍 Slding window - LC76, 438变形题  -------------------------------------------
  
  t作为标准比对的t frequency map, 过程中不对t进行任何更改
  s是实际的window map, 记录和s和t中每一个一样char的频率。 滑动窗口过程中只更改s的window map
  matched很重要，是记载window中match了多少个字符, 当match===needs.size说明window里元素全match上了t！！

  时间复杂度： O(m+n)
    初始化needs映射的时间复杂度为O(m)，m是t的长度
    滑动窗口的时间复杂度是O(n)，n是s的长度
 */
var checkInclusion = function (target, s) {
  // set frequency map (needs) to target string: target
  const needs = new Map();
  for (let char of target) {
    needs.set(char, needs.get(char) + 1 || 1);
  }

  //sliding window technique on s:
  let map = new Map();
  let matched = 0; // <--- key is here
  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    //当needs中有移入元素时，才更新window
    if (needs.has(s[fast])) {
      map.set(s[fast], map.get(s[fast]) + 1 || 1);
      if (map.get(s[fast]) === needs.get(s[fast])) matched += 1; // <--- key is here
    }

    /* 当windowSize > target.length时，说明窗口大小超过题目要求的固定target的长度（invalid window). 就shrink the window */
    while (fast - slow + 1 > target.length) {
      //当needs中有移出元素时，才更新window
      if (needs.has(s[slow])) {
        if (map.get(s[slow]) === needs.get(s[slow])) matched -= 1; // <--- key is here
        map.set(s[slow], map.get(s[slow]) - 1);
      }
      slow++;
    }

    if (matched === needs.size) return true; // <--- key is here
    fast++;
  }

  return false;
};
