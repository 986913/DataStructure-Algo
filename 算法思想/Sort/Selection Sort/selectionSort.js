/* 
  Selection sort：
    先遍历一遍数组，找到数组中的最小值，然后把它和数组的第一个元素交换位置；
    接着再遍历一遍数组，找到第二小的元素，和数组的第二个元素交换位置；
    以此类推，直到整个数组有序。
  
  ----------------
  算法步骤 in general:
    双层for循环。将数组分为sorted和unsorted两部分，
    外循环控制走的轮数(arr.length) 同时sorted index也就是 i 本身在走, 
    内循环负责找出最小/值的索引(minIndex). 
    外循环每走完一轮,如果最小值的index和sorted index不一样 则进行swap.

    其实sortedIndex相当于一个分割线
        索引 < sortedIndex 的元素都是已排序的
        索引 >= sortedIndex 的元素都是未排序的
        初始化为 0，表示整个数组都是未排序的

  ----------------
  Selection sorting不是稳定排序
  Selection sorting  是原地排序
  Big O：
    best    time complexity     O(n²)
    average time complexity     O(n²)
    worst   time complexity     O(n²)
    space complexity            O(1)
*/

/***************************** 基础版 ******************************/
const selectionSort = (nums) => {
  /* 外循环loop nums, 其中i就是当前索引  (已排序好的最后一个元素索引: sortedIdx）*/
  for (let i = 0; i < nums.length; i++) {
    let sortedIdx = i;
    let minIndex = i; //注意：初始化为i

    /* 内循环找出 未排序中最小值的index */
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    // swap 当前index(已排序部分最后一个元素) 和 未排序部分中最小元素
    if (sortedIdx !== minIndex) {
      [nums[sortedIdx], nums[minIndex]] = [nums[minIndex], nums[sortedIdx]];
    }
  }

  return nums;
};

/************************* 稳定性 优化版 *************************/
const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let sortedIdx = i;
    let minIndex = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (sortedIdx !== minIndex) {
      //[nums[sortedIdx], nums[minIndex]] = [nums[minIndex], nums[sortedIdx]];
      //优化： 将 nums[sortedIndex.....minIndex] 的元素整体向后移动一位
      let minNumber = nums[minIndex];
      // 数组搬移数据的操作
      for (let i = minIndex; i > sortedIdx; i--) {
        nums[i] = nums[i - 1];
      }
      nums[sortedIdx] = minNumber;
    }
  }

  return nums;
};
