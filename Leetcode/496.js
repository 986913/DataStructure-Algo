/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//solution1:  force brute
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let max = nums1[i];

    while (index < nums2.length - 1) {
      if (nums2[index + 1] > max) {
        max = nums2[index + 1];
        break;
      }
      index++;
    }

    max = max === nums1[i] ? -1 : max;
    result.push(max);
  }

  return result;
};
