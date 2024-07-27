/*
  buildMaxHeap([1, 2, 3, 4, 5, 6, 7]);  
  // [7, 4, 6, 1, 3, 2, 5] or any other valid max heap

  buildMaxHeap([4, 6, 52, 10, 17, 28, 39, 43, 11]); 
  // [52, 43, 39, 17, 10, 6, 28, 4, 11] or any other valid max heap
*/

/*********** Main function (same with implement maxheap by use array) ***********/
const buildMaxHeap = (arr) => {
  let len = arr.length;

  // Step1: find the LAST 非叶子结点的index:  last_non_leaf_index
  let last_non_leaf_index = Math.floor(len / 2) - 1;

  //Step2: heapify down
  for (let i = last_non_leaf_index; i >= 0; i--) {
    heapify(arr, i); // 对每个节点调用heapify函数。
  }

  return arr;
};

/**************** helper function **********************************************/
const heapify = (arr, index) => {
  let len = arr.length;

  let leftIdx = 2 * index + 1;
  let rightIdx = 2 * index + 2;
  //Initialize largestIdx as root, 目的是找出arr[index],arr[left], arr[right]中最大值的索引 -->largestIdx
  let largestIdx = index;

  // If left child is larger than root
  if (leftIdx < len && arr[leftIdx] > arr[largestIdx]) {
    largestIdx = leftIdx;
  }
  // If right child is larger than largest so far
  if (rightIdx < len && arr[rightIdx] > arr[largestIdx]) {
    largestIdx = rightIdx;
  }

  // If largest is not root, then swap arr[largestIdx] and arr[index] and recursion to affected subtree
  if (largestIdx != index) {
    [arr[largestIdx], arr[index]] = [arr[index], arr[largestIdx]];

    //! 为什么用递归？--> 在交换节点之后，我们必须确保新的子树(lagestIdx)也符合最大堆的要求, Recursively heapify the affected sub-tree
    heapify(arr, largestIdx);
  }
};
