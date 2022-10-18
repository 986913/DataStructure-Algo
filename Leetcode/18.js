/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function (nums, target) {
  let result = [];
  if (nums.length < 4) return result;
  nums.sort((a, b) => a - b); // 1. 先排序

  /* Double for loop here to lock 2 elements: nums[i] and nums[j] */
  for (let i = 0; i < nums.length - 3; i++) {
    let iNum = nums[i];
    if (i > 0 && iNum === nums[i - 1]) continue; // 去重iNum

    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1,
        right = nums.length - 1,
        jNum = nums[j];

      if (j > i + 1 && jNum === nums[j - 1]) continue; // 去重jNum

      while (left < right) {
        let fourSum = iNum + jNum + nums[left] + nums[right];

        if (fourSum < target) {
          left++;
        } else if (fourSum > target) {
          right--;
        } else {
          result.push([iNum, jNum, nums[left], nums[right]]);

          // 去重nums[left]
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          // 去重nums[right]
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          //找到答案后， 同时收缩双指针
          left++;
          right--;
        }
      }
    }
  }

  return result;
};
