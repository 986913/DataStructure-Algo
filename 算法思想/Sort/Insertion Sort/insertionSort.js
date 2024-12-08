/* 
  Insertion sort：
  和 Selection sort相似，把n个带排序的元素看成一个sorted和一个unsorted, 
  开始时sorted中只包含一个元素，unsorted中会有n-1个元素，
  在 nums[0..sortedIndex-1] 这个部分有序的数组中，找到unsorted第一个元素nums[sortedIndex]应该插入的位置，然后进行插入
  
  ----------------
  算法步骤 in general:
  外层for loop控制轮数，范0到n-1。 
  while控制shifting，每次循环会更新insertIdx
  外层for loop每轮结束会插入元素


  ----------------
  Insertion sorting  是稳定排序
  Insertion sorting  是原地排序
  Big O：
    best    time complexity     O(n)
    average time complexity     O(n²)
    worst   time complexity     O(n²)
    space complexity            O(1)
*/

/***************************** 基础版 ******************************/
const insertionSort = (nums) => {
  /* 外循环loop nums, 其中i是当前索引 */
  for (let i = 0; i < nums.length; i++) {
    let insertIdx = i; // 在哪儿插
    let currValue = nums[i]; // 插什么值

    // while控制shifting, to find insertIdx
    while (nums[insertIdx - 1] > currValue && insertIdx >= 0) {
      nums[insertIdx] = nums[insertIdx - 1]; // use nums[i - 1] to fill up hole, when nums[i - 1] > currValue
      insertIdx--; // continue to move hole to the left
    }
    // found the insertIdx,然后插入
    nums[insertIdx] = currValue;
  }

  return nums;
};
