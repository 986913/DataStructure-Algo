/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/******************************* Solution1: 暴力双循环 *********************************************/
var characterReplacement = function (s, k) {
  let maxLenAfterReplace = 0;

  // Iterate through each starting point of the substring
  for (let i = 0; i < s.length; i++) {
    let map = new Map(); //在for-loop内部维持一个map
    let maxFreqInWindow = 0;

    // Iterate through the end point of the substring
    for (let j = i; j < s.length; j++) {
      map.set(s[j], map.get(s[j]) + 1 || 1);

      // Update the max frequency of any character in the current window
      maxFreqInWindow = Math.max(maxFreqInWindow, map.get(s[j]));

      // Calculate the number of replacements needed
      let windowSize = j - i + 1;
      let charsToReplace = windowSize - maxFreqInWindow;

      // If replacements needed is within the limit, update max length
      if (charsToReplace <= k) {
        maxLenAfterReplace = Math.max(maxLenAfterReplace, windowSize);
      }
    }
  }

  return maxLenAfterReplace;
};

/******************************* Solution2: 👍滑动窗口 固定窗口 - LC567,76,438变形题 ***************************/
var characterReplacement = function (s, k) {
  let maxLenAfterReplace = 0;

  let map = new Map();
  let maxFreqInWindow = 0;

  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    map.set(s[fast], map.get(s[fast]) + 1 || 1);
    maxFreqInWindow = Math.max(maxFreqInWindow, map.get(s[fast]));

    let windowSize = fast - slow + 1;
    let charsToReplace = windowSize - maxFreqInWindow;
    /* 当 windowSize - maxFreqInWindow > k时，说明替代次数大于k了。 不符合题目要求（invalid window） 就shrink the window */
    if (charsToReplace > k) {
      map.set(s[slow], map.get(s[slow]) - 1);
      slow++;

      windowSize = fast - slow + 1; // 记得在调整slow指针后，重新计算窗口大小。
    }

    maxLenAfterReplace = Math.max(maxLenAfterReplace, windowSize);
    fast++;
  }

  return maxLenAfterReplace;
};
