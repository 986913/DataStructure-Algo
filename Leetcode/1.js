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

//2. 👍👍👍 sort+2points: 定位两个指针根据和的大小来移动另外一个。这里设定的指针个数根据题目中K的个数来定
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

/* solution3: hash map:  
    遍历数组，每访问一个元素，先判断其配对的元素是否在Hash表中，hash table以item为Key, index为value
    如果在的话就说明我们找到了答案，将其输出即可，
    如果没有找到，就将当前的元素放入 Hash 表中，以方便后面的元素来配对。
*/
var twoSum = function (nums, target) {
  let seen = new Map(); // seen用来存放遍历过得元素

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (seen.has(diff)) return [i, seen.get(diff)]; // 先判断diff是否被遍历过， 被遍历过得话就直接返回了
    seen.set(nums[i], i);
  }
};
