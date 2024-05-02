/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/******************************* Solution: LC15-3sum变形题 ****************************************/
const threeSumClosest = (nums, target) => {
  // Step1. 将数组排序
  nums.sort((a, b) => a - b);

  let distance = Infinity;
  let sum = 0;

  // Step2. 单层for循环套上2sum
  for (let i = 0; i < nums.length - 2; i++) {
    let iNum = nums[i]; //forloop的当前指针，包围2sum的指针
    if (iNum === nums[i - 1]) continue; // 🟡去重iNum🟡

    // Step3. 套用2sum
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const threeSum = nums[left] + nums[right] + iNum;

      // difference is here:
      if (Math.abs(threeSum - target) < distance) {
        sum = threeSum; // update sum
        distance = Math.abs(threeSum - target); // update distance
      }

      // update left and right corresponding
      if (threeSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return sum;
};
