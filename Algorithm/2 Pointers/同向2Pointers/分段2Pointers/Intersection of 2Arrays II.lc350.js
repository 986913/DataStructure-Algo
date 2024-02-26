/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/******************************************* 暴力法 *************************************************/
var intersect = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        nums2.splice(j, 1); // Remove the matched element from nums2 to avoid duplicates
        break; // Break the inner loop after finding a match
      }
    }
  }
  return result;
};

/********************* 👍👍👍 2 pointer: -- 通用解法,记得排序先 ************************************************/
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  let result = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      // nums1[p1] === nums2[p2]
      result.push(nums2[p2]);

      p1++;
      p2++;
    }
  }

  return result;
};
