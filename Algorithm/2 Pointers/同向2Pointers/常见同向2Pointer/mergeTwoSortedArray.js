/**
 * Implement a function that merges two sorted arrays into another sorted array.
 * Name it mergeArrays(arr1, arr2):
 *   mergeArrays([1,3,4,5],[2,6,7,8])  ---> [1,2,3,4,5,6,7,8]
 *   mergeArrays([-133,-100,0,4],[-2000,2000])  ---> [-2000,-133,-100,0,4,2000]
 */

/* ----------------Solution 1: two pointer, time complexity O(n+m), n and m is len of arr1, arr2---------------- */
function mergeArrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let result = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2++;
  }

  return result;
}

/* ----------------Solution 2: spread operator: time complexity O(nlogn) ---------------- */
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
