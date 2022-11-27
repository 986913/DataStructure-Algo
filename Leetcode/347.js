/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/** ---------------------------------------- solution1 :  hashtbale + sort --------------------------------------------------- */
// nums: [1,1,1,2,2,3], k=2 as example:
var topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];

  /* 1. build hash map {key => frequency}:  { 1 => 3, 2 => 2, 3 => 1 } */
  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1);
  }

  /*2. convert map to arr, then sort by frequency from big to small: [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] */
  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  /*3. sinced sorted by frequency, then find top k elements */
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }

  return result;
};

// top k issues: https://dev.to/986913/top-k-elements-js-13e0
/* ：-------------------------------------- solution1 : hashtbale + Min Heap：--------------------------------------------------------*/
import { MinHeap } from '../DataStructure/Tree/Heap/Heap';
var topKFrequent = function (nums, k) {
  /* 1. build hash map {key => frequency}:  nums[1,1,1,2,2,3] k=2 as example -->   { 1 => 3, 2 => 2, 3 => 1 } */
  let map = new Map();
  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  /* 2. build minHeap (maintain k length) */
  let minheap = new MinHeap(k);
  let arr = [];
  map.forEach((value, key) => {
    arr.push({
      key: key,
      priority: value,
    });
  }); //[ {key: 1, priority:3}, {key: 2, priority:2}, {key: 3, priority:1}]
  minheap.build(arr);

  //3. klenght min-heap is ready, log result
  return minheap
    .get()
    .map((item) => item.key)
    .reverse();
};
