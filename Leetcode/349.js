/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//暴力法 :
var intersection = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && result.indexOf(nums2[j]) == -1) {
        result.push(nums2[j]);
      }
    }
  }
  return result;
};

//2.👍👍👍 hash table - use set
var intersection = function (nums1, nums2) {
  let set = new Set();

  let set1 = new Set(nums1);

  for (let n of nums2) {
    if (set1.has(n)) set.add(n);
  }

  return Array.from(set);
};

//3. 👍👍👍 2 pointer:
var intersection = function (nums1, nums2) {
  let result = [];
  let p1 = 0;
  let p2 = 0;

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      // nums1[p1] === nums2[p2]
      if (result.indexOf(nums2[p2]) == -1) result.push(nums2[p2]);
      p1++;
      p2++;
    }
  }
  return result;
};
