/**
 * @param {number[]} nums
 * @return {number}
 */

/************************ Solution: slow - fast pointers ******************************/

var countHillValley = function (nums) {
  let count = 0;

  let slow = 0;
  let fast = 1;
  while (fast < nums.length - 1) {
    //当nums[fast]是valley或者hill时，更新count和slow指针
    if (
      (nums[fast] > nums[slow] && nums[fast] > nums[fast + 1]) ||
      (nums[fast] < nums[slow] && nums[fast] < nums[fast + 1])
    ) {
      count += 1;
      slow = fast;
    }

    fast++;
  }

  return count;
};
