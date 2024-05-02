/******************************** Solution: Two pointers👍 前提nums是sorted好的----LC27变形题 ********************************************/
var removeDuplicates = function (nums) {
  let slow = 1;
  let fast = 1;

  while (fast < nums.length) {
    //只有当nums[fast]不等于nums[slow - 1]时候，才会swap和slow++
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++; // fast是持续++的
  }

  return slow;
};
