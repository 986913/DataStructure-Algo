/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//  Approach 1: Naive Merge then sort
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

//Approach 2:  2 points
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; //tracking nums1
  let p2 = n - 1; //tracking nums2
  let p = m + n - 1; //modify nums1

  while (p >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      if (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
      }
    }

    p--;
  }
};
