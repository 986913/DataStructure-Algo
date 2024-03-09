/**
 * @param {number} k
 * @param {number[]} nums
 */

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var KthLargest = function (k, nums) {
  this.array = nums;
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
import { MinHeap } from '../DataStructure/Tree/Heap/Heap';
KthLargest.prototype.add = function (val) {
  this.array.push(val);

  //return kth max elemenet --> maintain a k size minHeap
  let minheap = new MinHeap(this.k);
  minheap.build(this.array);
  return minheap.peek();
};
