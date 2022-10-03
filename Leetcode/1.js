/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution1:  brute force
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) result = [i, j];
      j++;
    }
  }
  return result;
};

// solution2: hash map
var twoSum = function (nums, target) {
  let seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (seen.has(diff)) return [i, seen.get(diff)];
    seen.set(nums[i], i);
  }
};

//3. sort+2points: 定位两个指针根据和的大小来移动另外一个。这里设定的指针个数根据题目中K的个数来定
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
      // left ++; right++
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return [-1, -1];
};
