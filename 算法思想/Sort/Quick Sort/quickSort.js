/*
  Quick sort 原理:
    若要对 arr[low..high] 进行排序，我们先找一个分界点 p (ie: arr[low])
    通过交换元素使得 arr[low..pivotIdx-1] 都小于等于 arr[pivotIdx]，且 arr[pivotIdx+1..high] 都大于 arr[pivotIdx]，
    然后递归地去 arr[low..pivotIdx-1] 和 arr[pivotIdx+1..high] 中寻找新的分界点，最后整个数组就被排序了。

    其中 partition 函数的实现是快速排序的核心: 即遍历 arr[low..high]，将切分点元素 pivot 放到正确的位置，并返回该位置的索引pivotIdx。
    ---------
    Big O：
      best time complexity     O(n log n) --- 其中n是每层的复杂度，log n是树的高度
      average time complexity  O(n log n) --- 其中n是每层的复杂度，log n是树的高度
      worst time complexity    O(n²)
      space complexity         O(log n)   --- log n是树的高度
 */

/************************************ Quick sort ********************************************/
// Main function:
var sortArray = function (nums, low = 0, high = nums.length - 1) {
  if (low > high) return; // end recursion

  // 在前序位置将arr[low]排好序（通过交换元素构建分界点pivotIdx); pivotIdx就是arr[low]应该在的index
  const pivotIdx = partition(nums, low, high);

  // 递归地去 arr[low..pivotIdx-1] 和 arr[pivotIdx+1..high] 中寻找新的分界点
  sortArray(nums, low, pivotIdx - 1);
  sortArray(nums, pivotIdx + 1, high);

  return nums;
};

/* Helper function : 
  它选择一个pviot元素, 并将数组重新排列，使得所有< pviot的元素位于pviot的左边，所有> pviot的元素位于pviot的右边。
  然后把pviot拍好序
  最后返回pviot元素的最终index
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

  //在 partition 函数结束时，把 pivot 放到正确的最终位置 (也就是说：把pivot排好序)
  [arr[swapIndex], arr[low]] = [arr[low], arr[swapIndex]];

  //返回swapIndex
  return swapIndex;
};
