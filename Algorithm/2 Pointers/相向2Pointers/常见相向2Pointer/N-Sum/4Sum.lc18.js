/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/*------------------------ Solution 👍👍👍 2 pointer 转换为2sum --------------------------------------- */

const fourSum = (nums, target) => {
  const result = [];

  // Step1. 将数组排序
  nums.sort((a, b) => a - b);

  // Step2. 双层for循环套上2sum
  for (let i = 0; i < nums.length; i++) {
    let iNum = nums[i]; //外层forloop的当前指针，包围2sum的指针
    if (iNum === nums[i - 1]) continue; //🟡去重iNum🟡

    for (let j = i + 1; j < nums.length; j++) {
      let jNum = nums[j]; //内层forloop的当前指针，包围2sum的指针
      if (j > i + 1 && jNum === nums[j - 1]) continue; //🟡去重jNum🟡

      /******************Step3: 套用2sum***********************/
      let left = j + 1; //注意left赋值不再是0了
      let right = nums.length - 1;
      while (left < right) {
        let sum = iNum + jNum + nums[left] + nums[right];

        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else if (sum === target) {
          result.push([iNum, jNum, nums[left], nums[right]]); // 找到答案, 更新result
          // 🟡去重num[left]🟡
          while (left < right && nums[left] === nums[left + 1]) left++;
          // 🟡去重num[right]]🟡
          while (left < right && nums[right] === nums[right - 1]) right--;

          // 找到答案时，双指针同时收缩
          left++;
          right--;
        }
      }
      /*******************************************************/
    }
  }

  return result;
};
