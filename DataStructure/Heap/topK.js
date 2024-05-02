import { MinHeap } from '../DataStructure/Tree/Heap/Heap';

/* ---------------------------- 用例测试 --------------------------------- */
topK([1, 10, 8, 9, 10, 2, 3, 4, 8, 8, 6], 4); // [10, 10, 9, 8]

/*------------ Main Logic -------------------------- */
function topK(arr, k) {
  if (arr.length <= 1) return arr;

  // build a min-heap with k length
  let minheap = new MinHeap(k);
  let array = [];
  arr.forEach((item) => {
    array.push(item);
  });
  minheap.build(array);

  return minheap.get().reverse();
}
