/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

// hash table - Set
var arraysIntersection = function (arr1, arr2, arr3) {
  let set = new Set();

  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  for (let n of arr3) {
    if (set1.has(n) && set2.has(n)) set.add(n);
  }

  return Array.from(set);
};
