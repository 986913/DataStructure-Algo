/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/* ------------------------ Solution: 👍 Slding window - LC567, 76, 438变形题 ------------------------*/
const characterReplacement = (str, k) => {
  let maxLen = 0;
  let maxRepeatLetterCount = 0;

  let window = new Map();
  let slow = 0;
  let fast = 0;
  while (fast < str.length) {
    let moveIn = str[fast];
    window.set(moveIn, window.get(moveIn) + 1 || 1);
    fast++;

    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, window.get(moveIn));
    /*判断左侧窗口是否要收缩:  
      window size - repeating letters count = remain letters.  
     if remain letters > k then shrink the window, as we are not allowed to replace more than 'k' letters */
    if (fast - slow - maxRepeatLetterCount > k) {
      let moveOut = str[slow];
      window.set(moveOut, window.get(moveOut) - 1);
      slow++;
    }

    maxLen = Math.max(maxLen, fast - slow); // update maxLen
  }

  return maxLen;
};
