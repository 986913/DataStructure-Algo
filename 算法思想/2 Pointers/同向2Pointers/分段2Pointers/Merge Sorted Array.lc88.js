/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**************** Solution 1: Naive Merge then sort *****************/
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

/***************** Solution 2: 分段双指针 LC21变形题 ***************************/
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; // for nums1
  let p2 = n - 1; // for nums2

  let p = m + n - 1; // for after-merge nums1

  // 从后向前生成结果数组，类似合并两个有序链表的逻辑
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--; // <--- don't forget this line
  }

  // 可能其中一个数组的指针走到尽头了，而另一个还没走完. 因为我们本身就是在往 nums1 中放元素，所以只需考虑 nums2 是否剩元素即可
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};
