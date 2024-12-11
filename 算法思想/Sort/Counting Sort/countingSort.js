/* 
  Counting Sort: 统计每种元素出现的次数，进而推算出每个元素在排序后数组中的index位置，最终完成排序。
  ----------------

  Counting sorting 是稳定排序
  Counting sorting 不是原地排序

  Big O: 
  (其中n是待排序数组长度, max−min是待排序数组的元素范围)
    best time complexity     O(n + max − min)
    average time complexity  O(n + max − min)
    worst time complexity    O(n + max − min)
    space complexity         O(n + max − min)
*/

/************************************** Counting Sort ******************************************/
var countingSort = function (nums) {
  // 找到最大和最小元素, 计算索引偏移量和 counts 数组大小
  let max = -Infinity;
  let min = Infinity;
  nums.forEach((n) => {
    min = Math.min(n, min);
    max = Math.max(n, max);
  });

  // 根据最大值和最小值，将元素映射到从0开始的索引值
  let offset = -min;
  let counts = new Array(max - min + 1).fill(0);

  // 统计每个元素出现的次数
  nums.forEach((n) => {
    counts[n + offset] += 1;
  });

  //累加 counts 数组，得到的是nums[i] 在排序后的数组中的结束位置
  for (let i = 1; i < counts.length; i++) {
    counts[i] = counts[i] + counts[i - 1];
  }

  // 根据每个元素排序后的索引位置，完成排序
  // 这里注意，我们从后往前遍历 nums，是为了保证排序的稳定性
  let sorted = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    let index = nums[i] + offset;
    sorted[counts[index] - 1] = nums[i]; //将当前元素nums[i] 放到sorted数组的正确位置上。

    counts[index]--; // update counts数组
  }

  // 把排序结果复制回原数组
  sorted.forEach((n, idx) => (nums[idx] = n));
  return nums;
};
