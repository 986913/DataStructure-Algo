/**
 * @param {number[]} nums
 * @return {number}
 */

/**************************** Solution 1: Sort **************************************/
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);

  let maxLen = -Infinity;
  let curLen = 1;
  for (let i = 1; i < nums.length; i++) {
    //略过重复的
    if (nums[i] === nums[i - 1]) continue;

    //连续升序就是update currLen
    if (nums[i] === nums[i - 1] + 1) {
      curLen += 1;
    } else {
      //没有连续就更新longestLen， reset currLen
      maxLen = Math.max(maxLen, curLen);
      curLen = 1;
    }
  }
  return Math.max(maxLen, curLen);
};

/**************************** Solution 2: Set **************************************/
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longestLen = 0;

  for (let n of set) {
    if (!set.has(n - 1)) {
      let curNum = n;
      let curLen = 1;

      while (set.has(curNum + 1)) {
        curNum += 1;
        curLen += 1;
      }
      longestLen = Math.max(longestLen, curLen);
    }
  }

  return longestLen;
};
