/**
 * @param {number[]} nums
 * @return {number[]}
 */

/******************************** Quick sort - O(n logn) *************************************/
/********** Main function **********/
const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low >= high) return; // end recursion

  // 在前序位置将arr[low]排好序（通过交换元素构建分界点pivotIdx）
  // pivotIdx就是arr[low]应该在的index
  let pivotIdx = partition(arr, low, high);

  // 递归地去 arr[lo..p-1] 和 arr[p+1..hi] 中寻找新的分界点
  quickSort(arr, low, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, high);
};
/* Helper function : 
  它选择一个pviot(ie: arr[low])元素, 并将数组重新排列，使得所有< pviot的元素位于pviot的左边，所有> pviot的元素位于pviot的右边。
  然后把pviot(ie: arr[low])排好序
  最后返回pviot(ie: arr[low])元素的最终index
  -----
  Test cases:
    const arr = [300, 2, 400, 100, 9];
    console.log(partition(arr));        // 3
    console.log(arr);                   // [9, 2, 100, 300, 400]
*/
const partition = (arr, low, high) => {
  let pivot = arr[low]; //选择第一个元素作为 pivot
  let swapIndex = low; //swapIndex用来追踪: 当前小于pivot的元素应该放到的位置

  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }

  //在 partition 函数结束时，把 pivot(ie: arr[low])放到正确的最终位置
  //(也就是说：把pivot(ie: arr[low])排好序)
  [arr[swapIndex], arr[low]] = [arr[low], arr[swapIndex]];

  //返回swapIndex
  return swapIndex;
};

/******************************** Merge sort - O(n logn) *************************************/
/********** Main function **********/
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  //后序位置进行merge
  let res = merge(left, right);
  arr.forEach((_, index) => (arr[index] = res[index]));

  return arr;
}
/********** Helper function *********
 Merges 2 sorted arrays (分段双指针) */
function merge(arr1, arr2) {
  let results = [];
  let i = 0; // i for arr1
  let j = 0; // j for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

/******************************** Counting Sort  O(n + max − min) ***************************
  其中n是待排序数组长度, max−min是待排序数组的元素范围
*/
var sortArray = function (nums) {
  // 找到最大和最小元素, 计算索引偏移量和 counts 数组大小
  // 找到最大和最小元素, 计算索引偏移量和 counts 数组大小
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  let offset = -min;

  // 根据最大值和最小值，将元素映射到从0开始的索引值
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
    sorted[counts[index] - 1] = nums[i];

    counts[index]--; // update counts数组
  }

  // 把排序结果复制回原数组
  sorted.forEach((n, idx) => (nums[idx] = n));
  return nums;
};

/******************************** Shell Sorting O(n²) *************************************/
const sortArray = (nums) => {
  let n = nums.length;
  // 初始化gap，从大到小逐步缩小到1:
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 这是重点 ---> 在当前gap下，使用插入排序对数组nums进行分组排序:
    for (let i = gap; i < n; i++) {
      let insertIdx = i; // 在哪儿插
      let currValue = nums[i]; // 插什么值
      // 类似插入排序，但按照gap间隔比较和移动
      while (nums[insertIdx - gap] > currValue && insertIdx >= gap) {
        nums[insertIdx] = nums[insertIdx - gap];
        insertIdx -= gap;
      }
      // found the insertIdx,然后插入
      nums[insertIdx] = currValue;
    }
  }
  return nums;
};

/******************************** Insertion Sorting  O(n²) ********************************/
const sortArray = (nums) => {
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

/******************************** Bubble    Sorting  O(n²) ********************************/
function sortArray(arr) {
  let done; //<-- diff is here，标记当前轮次是否发生过交换

  for (let i = 0; i < arr.length - 1; i++) {
    done = true; //<-- diff is here, 假设本轮排序时数组是有序的

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        done = false; //<-- diff is here, 说明整个数组还不是完全有序
      }
    }
    if (done) break; //<-- diff is here, 如果这一轮没有发生任何交换，数组已经有序，直接退出循环
  }
  return arr;
}

/******************************** Selection Sorting  O(n²) ********************************/
const sortArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let sortedIdx = i;
    let smallestNumberIdx = i; //注意：初始化为i

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[smallestNumberIdx]) {
        smallestNumberIdx = j;
      }
    }
    // swap 当前index(已排序部分最后一个元素) 和 smallestNumberIdx(未排序部分中最小元素的index)
    [nums[sortedIdx], nums[smallestNumberIdx]] = [
      nums[smallestNumberIdx],
      nums[sortedIdx],
    ];
  }

  return nums;
};
