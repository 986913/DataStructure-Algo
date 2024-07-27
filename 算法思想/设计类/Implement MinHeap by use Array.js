/*
  buildMinHeap([1, 2, 3, 4, 5, 6, 7]);  
  // [1, 2, 3, 4, 5, 6, 7] or any other valid min heap

  buildMinHeap([4, 6, 52, 10, 17, 28, 39, 43, 11]); 
  // [4, 6, 28, 10, 17, 52, 39, 43, 11]  or any other valid min heap
*/

/*********** Main function (same with implement maxheap by use array) ***********/
const buildMinHeap = (arr) => {
  let len = arr.length;

  // Step1: find the LAST 非叶子结点的index:  last_non_leaf_index
  let last_non_leaf_index = Math.floor(len / 2) - 1;

  // Step2: heapify down
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
  //Initialize smallestIdx as root, 目的是找出arr[index],arr[left], arr[right]中最小值的索引 -->smallestIdx
  let smallestIdx = index;

  // If left child is smaller than root
  if (leftIdx < len && arr[leftIdx] < arr[smallestIdx]) {
    smallestIdx = leftIdx;
  }
  // If right child is smaller than smallest so far
  if (rightIdx < len && arr[rightIdx] < arr[smallestIdx]) {
    smallestIdx = rightIdx;
  }

  // If smallest is not root, then swap arr[smallestIdx] and arr[index] and recursion to affected subtree
  if (smallestIdx != index) {
    [arr[smallestIdx], arr[index]] = [arr[index], arr[smallestIdx]];

    //! 为什么用递归？--> 在交换节点之后，我们必须确保新的子树(lagestIdx)也符合最大堆的要求, Recursively heapify the affected sub-tree
    heapify(arr, smallestIdx);
  }
};
