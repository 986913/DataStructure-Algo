/******************************** Solution: Two pointers👍 前提nums是sorted好的 --- LC27变形题 ********************************************/

/**
 * 【Loop Invariant】
 *    区间 [0, slow) 始终代表 当前已生成的“无重复元素”数组。
 *      - slow 的数值时刻等于当前有效数组的长度。
 *      - nums[slow - 1] 始终是当前有效数组中的最后一个元素（即最新加入的无重元素）
 *
 * 【初始状态】
 *    slow = 1, fast = 1
 *    区间 [0, 1) 仅包含 nums[0]，单个元素天然无重复，不变量成立。
 */
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
