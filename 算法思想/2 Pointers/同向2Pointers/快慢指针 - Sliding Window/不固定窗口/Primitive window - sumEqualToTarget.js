/**
 * @param {number[]} nums
 * @param {number} targetSum
 * @return {number[]}

  给你一个数组和数字targetSum, 求满足sum等于targetSum的第一个连续子数组。找不到则返回[]
  eg: collect([2,1,3,6,2,9,4], 9)    // [3,6]
  eg: collect([2,1,3,6,2,9,4], 7)    // []
  eg: collect([2,1,3,6,2,9,4], 4)    // [1,3]
 */

/************************** Sliding Window ************************************/
const collect = (nums, targetSum) => {
  if (nums.length === 0) return [];

  let curSum = 0;
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    let moveIn = nums[fast];
    curSum += moveIn;
    fast++;

    while (slow < fast && curSum >= targetSum) {
      if (curSum === targetSum) return nums.slice(slow, fast); // key is here

      let moveOut = nums[slow];
      curSum -= moveOut;
      slow++;
    }
  }

  return [];
};
