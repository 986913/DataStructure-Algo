/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/******************************Solution 1: Merged two sorted array ***********************************/
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [];

  let p1 = 0; // p1 is for nums1
  let p2 = 0; // p2 is for nums2
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] <= nums2[p2]) {
      mergedArr.push(nums1[p1]);
      p1++;
    } else {
      mergedArr.push(nums2[p2]);
      p2++;
    }
  }

  while (p1 < nums1.length) {
    mergedArr.push(nums1[p1]);
    p1++;
  }
  while (p2 < nums2.length) {
    mergedArr.push(nums2[p2]);
    p2++;
  }

  let mergedLen = mergedArr.length;
  let midIdx = Math.floor(mergedLen / 2);

  let isOddLength = mergedLen % 2 === 0 ? false : true;
  if (isOddLength) return mergedArr[midIdx];
  else return (mergedArr[midIdx] + mergedArr[midIdx - 1]) / 2;
};

/******************************Solution 2: Binary Serach ***********************************/
var findMedianSortedArrays = function (nums1, nums2) {
  //确保nums1是长度短的那个
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  // 在交换了nums1和nums2后，需要重新获取它们的长度以确保后续计算正确。
  const lenA = nums1.length;
  const lenB = nums2.length;

  //在较短的数组上(ie: nums1)上进行binary search, 中线mid就是cutA,对cutA进行调节：
  let left = 0;
  let right = lenA;
  while (left <= right) {
    let cutA = left + Math.floor((right - left) / 2); //在数组A中，分割线｜左边的元素个数 (Calculate the cut point in nums1)
    let cutB = Math.floor((lenA + lenB + 1) / 2) - cutA; //在数组B中，分割线｜左边的元素个数 (Calculate the cut point in nums2 such that left parts of both arrays combined are equal to right parts)

    //根据L1和R2, L2和R1进行大小比较，进行cutA调节
    // Elements just before and after the cut in nums1
    let L1 = cutA === 0 ? -Infinity : nums1[cutA - 1];
    let R1 = cutA === lenA ? Infinity : nums1[cutA];

    // Elements just before and after the cut in nums2
    let L2 = cutB === 0 ? -Infinity : nums2[cutB - 1];
    let R2 = cutB === lenB ? Infinity : nums2[cutB];

    // Adjust binary search range based on comparison of border elements
    if (L1 > R2) {
      right = cutA - 1; //   Move cutA to the left
    } else if (L2 > R1) {
      left = cutA + 1; // Move cutA to the right
    } else if (L1 <= R2 && L2 <= R1) {
      // Correct cut found. 当前的cutA是正确的分割线
      if ((lenA + lenB) % 2 === 0) {
        // If total length is even, median is the average of max of left parts and min of right parts
        return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
      } else {
        // If total length is odd, median is the max of left parts
        return Math.max(L1, L2);
      }
    }
  }
};
