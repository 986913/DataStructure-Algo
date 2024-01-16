/*****************************  Solution: Two pointers  ******************************/
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let cur = 0; // count the number of consecutive characters in the current group.
  let pre = 0; // count the number of consecutive characters in the previous group.
  let result = 0; // count the valid binary substrings.

  for (let i = 0; i < s.length; i++) {
    //说明在连续的区间里, increment the current group count.
    if (s[i] === s[i - 1]) {
      cur++;
    } else {
      result += Math.min(pre, cur); // Calculate the number of valid binary substrings based on the previous and current group counts.

      pre = cur; // Update the previous group count with the current group count.
      cur = 1; // Reset the current group count to 1 since we encountered a different character.
    }
  }

  // After the loop, add the remaining valid binary substrings based on the last group.
  return result + Math.min(pre, cur);
};
