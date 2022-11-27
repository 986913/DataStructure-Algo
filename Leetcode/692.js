/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

import { MinHeap } from '../DataStructure/Tree/Heap/Heap';

var topKFrequent = function (words, k) {
  //  1. build a hash map : {i => 2, love => 2, leetcode =>1, coding => 1}
  let map = new Map();
  words.forEach((word) => map.set(word, map.get(word) + 1 || 1));

  //  2. build a min-heap with k length (based on hashmap above)
  let minheap = new MinHeap(k);
  let arr = [];
  map.forEach((value, key) => {
    arr.push({
      key: key,
      priority: value,
    });
  });
  minheap.build(arr);

  // 3. return result
  return minheap
    .get()
    .map((item) => item.key)
    .reverse();
};
