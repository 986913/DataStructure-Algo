/**
 * Heap Sort:
 *
 * 原理:
 *  Heap sort is a comparison-based sorting algorithm that iteratively builds the unsorted array into a Max-heap data structure to identify the max element,
 *  and progressively swaps it to the end of the unsorted array to build a sorted array.
 *
 *
 * Big O：
      best time complexity     O(nlog(n))
      average time complexity  O(nlog(n))
      worst time complexity    O(nlog(n))
      space complexity         O(1)
 */

/* ---------------------------------------- Implemention ------------------------------------------------------ */

/* Main function: */
function heapSort(arr) {
  const len = arr.length;

  // Iterate, Start with the index of the last parent node: if child index is n, then it's parent index is Math.floor( (n-1)/2 )
  for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
    heapifyMax(arr, len, i);
  }

  // Iterate through the heap backwards
  for (let i = len - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; //swap the last element of the heap with the max element (the root of a max heap)
    heapifyMax(arr, i, 0); // Build a max heap again in preparation for the swap in the next iteration.
  }

  return arr;
}

/* helper function: building a max heap data-structure */
function heapifyMax(arr, len, parentIdx) {
  let largest = parentIdx; // Initiate largest value's index with parent index.
  const leftChildIdx = 2 * parentIdx + 1;
  const rightChildIdx = 2 * parentIdx + 2;

  // See if left child of parent exists and is larger than parent.
  if (leftChildIdx < len && arr[leftChildIdx] > arr[largest]) {
    largest = leftChildIdx;
  }
  // See if right child of parent exists and is larger than parent.
  if (rightChildIdx < len && arr[rightChildIdx] > arr[largest]) {
    largest = rightChildIdx;
  }
  // If `largest` is not the current parent, swap positions with the current parent.
  if (largest !== parentIdx) {
    [arr[parentIdx], arr[largest]] = [arr[largest], arr[parentIdx]];
    heapifyMax(arr, len, largest); // Continue to recursively heapify the affected subtree.
  }
}
