const length_of_longest_substring = function (str, k) {
  let windowStartIdx = 0;
  let longestLen = 0;
  let maxRepeatLetterCount = 0;
  let map = new Map(); // frequency map

  for (let windowEndIdx = 0; windowEndIdx < str.length; windowEndIdx++) {
    const rightChar = str[windowEndIdx];
    map.set(rightChar, map.get(rightChar) + 1 || 1);
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, map.get(rightChar));

    if (windowEndIdx - windowStartIdx + 1 - maxRepeatLetterCount > k) {
      leftChar = str[windowStartIdx];
      map.set(leftChar, map.get(leftChar) - 1);
      windowStartIdx += 1;
    }
    longestLen = Math.max(longestLen, windowEndIdx - windowStartIdx + 1);
  }

  return longestLen;
};
