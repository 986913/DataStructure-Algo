const length_of_longest_substring = function (str, k) {
  let windowStartIdx = 0;
  let longestLen = 0;
  let maxRepeatLetterCount = 0;
  let map = new Map(); // frequency map

  /* Current window size is from windowStart to windowEnd, overall we have a letter which is
    repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.

    if the remaining letters are more than 'k', it is the time to shrink the window as we are not allowed to replace more than 'k' letters */
  for (let windowEndIdx = 0; windowEndIdx < str.length; windowEndIdx++) {
    const rightChar = str[windowEndIdx];
    map.set(rightChar, map.get(rightChar) + 1 || 1); // create frequency map
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, map.get(rightChar)); // update count for repeat letters

    //KEY POINT: window size - repeating letters count = remain letters.  if remain letters > k then shrink the window, as we are not allowed to replace more than 'k' letters
    if (windowEndIdx - windowStartIdx + 1 - maxRepeatLetterCount > k) {
      leftChar = str[windowStartIdx];
      map.set(leftChar, map.get(leftChar) - 1);
      windowStartIdx += 1;
    }
    longestLen = Math.max(longestLen, windowEndIdx - windowStartIdx + 1);
  }

  return longestLen;
};
