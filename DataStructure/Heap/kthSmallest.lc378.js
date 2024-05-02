/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

import { MaxHeap } from '../DataStructure/Tree/Heap/Heap';
var kthSmallest = function (matrix, k) {
  let maxheap = new MaxHeap(k);

  let arr = matrix.flat();
  maxheap.build(arr);

  return maxheap.peek();
};
