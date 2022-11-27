/*** @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

import { MinHeap } from '../DataStructure/Tree/Heap/Heap';
const findKthLargest = function (nums, k) {
  /*这是建立Min-Heap的解法， 推荐！ */
  let minHeap = new MinHeap(k);
  minHeap.build(nums);
  return minHeap.peek();

  /*这是用Max-Heap的解法， 不推荐。。 */
  /*
  let maxHeap = new MaxHeap(nums.length);
  maxHeap.build(nums);

  let result = 0;
  while (k > 0) {
    result = maxHeap.removeRoot();
    k--;
  }
  return result;
  */
};
