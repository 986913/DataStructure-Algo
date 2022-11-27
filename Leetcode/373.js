/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
import { MaxHeap } from '../DataStructure/Tree/Heap/Heap';
var kSmallestPairs = function (nums1, nums2, k) {
  let allpairs = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      allpairs.push({
        key: [nums1[i], nums2[j]],
        priority: nums1[i] + nums2[j],
      });
    }
  }
  // console.log(allpairs)

  let maxheap = new MaxHeap(Math.min(allpairs.length, k));
  maxheap.build(allpairs);
  return maxheap.get().map((item) => item.key);
};
