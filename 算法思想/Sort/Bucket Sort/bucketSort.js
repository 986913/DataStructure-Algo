/* 
  Bucket Sort 核心思想分三步：
  1、将待排序数组中的元素使用映射函数分配到若干个「桶」中
  2、对每个桶中的元素进行insertion sort.
  3、最后将这些排好序的桶进行合并，得到排序结果
  ----------------

  Bucket sorting 是稳定排序
  Bucket sorting 是原地排序
  Big O:
    best time complexity     O(n+k) -- k是你定义的桶的个数
    average time complexity  O(n+k) -- k是你定义的桶的个数
    worst time complexity    O(n²) -- 假想所有元素都被分配到同一个桶中，此时就等于插入排序，当然这种情况一般不会出现
    space complexity         O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} bucketCount
 * @return {number[]}
 */
/***************************************************************************/
// Main function:
var sortArray = function (nums, bucketCount = 5) {
  if (nums.length === 0) return nums;

  // 找到最大和最小元素，计算偏移量和每个桶的大小
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  let range = max - min + 1;
  let bucketSize = Math.ceil(range / bucketCount);

  // 初始化桶
  let buckets = Array.from({ length: bucketCount }, () => []);
  // 将元素分配到桶中
  nums.forEach((n) => {
    let index = Math.floor((n - min) / bucketSize);
    buckets[index].push(n);
  });
  // 对每个桶进行insertion sort
  buckets.forEach((bucket) => insertionSort(bucket));

  // 合并有序桶
  let index = 0;
  buckets.forEach((bucket) => {
    bucket.forEach((n) => {
      nums[index] = n;
      index += 1;
    });
  });

  return nums;
};

// Helper function: 插入排序实现
const insertionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let insertIdx = i;
    let currValue = nums[i];
    while (insertIdx > 0 && nums[insertIdx - 1] > currValue) {
      nums[insertIdx] = nums[insertIdx - 1];
      insertIdx--;
    }
    nums[insertIdx] = currValue;
  }
  return nums;
};
