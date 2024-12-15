/* Radix sorting (LSD):  ONLY works for number sorting!!!   */

/* 
  Radix Sort 核心思想：
    Radix sort是 Counting sort算法的扩展
    它的主要思路是对待排序元素的每一位依次进行Counting sort， 由于counting sort是稳定的，所以对每一位完成count sort后，所有元素就完成了排序
  ----------------

  Radix sorting 是稳定排序
  Radix sorting不是原地排序
  Big O:
    best time complexity     O(nm) -- 待排序数组长度为n，m是number of digits (average)
    average time complexity  O(nm) -- 
    worst time complexity    O(nm) -- =
    space complexity         O(n+m)
*/

/***************************************************************************/
// Main function:
function radixSortLSD(nums) {
  // 找到最大和最小元素, 计算索引偏移量offset和 counts 数组大小
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  const offset = -min;

  // 根据最小元素，将所有元素转化为从零开始的非负数
  for (let i = 0; i < nums.length; i++) {
    nums[i] += offset;
  }
  max += offset; // 修正max，确保与偏移后的 nums 一致

  // 计算最大元素的位数maxLen
  let maxLen = 0;
  let tempMax = max;
  while (tempMax > 0) {
    tempMax = Math.floor(tempMax / 10);
    maxLen++;
  }
  // 从低位到高位，依次对每一位进行计数排序
  for (let k = 0; k < maxLen; k++) {
    countSort(nums, k);
  }

  // 将所有元素转化回原来的值
  for (let i = 0; i < nums.length; i++) {
    nums[i] -= offset;
  }
  return nums;
}

// Helper function, count sort: 已经确保nums中的元素都是非负数, k是当前需要排序的位数
function countSort(nums, k) {
  // 基数排序中每一位十进制数的取值范围是 0~9
  const count = new Array(10).fill(0);

  // 统计每位出现的次数
  for (let num of nums) {
    const digit = Math.floor(num / Math.pow(10, k)) % 10;
    count[digit]++;
  }
  //累加 counts 数组，得到的是nums[i] 在排序后的数组中的结束位置
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // 根据每个元素排序后的索引位置，完成排序
  // 这里注意，我们从后往前遍历 nums，是为了保证排序的稳定性
  const sorted = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const digit = Math.floor(nums[i] / Math.pow(10, k)) % 10; // 计算第 k 位的值
    sorted[count[digit] - 1] = nums[i]; //将当前元素nums[i] 放到sorted数组的正确位置上。

    count[digit]--; // 更新 count 数组，表示该位置已被占用
  }

  // 把排序结果复制回原数组
  sorted.forEach((n, idx) => (nums[idx] = n));
  return nums;
}
