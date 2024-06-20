/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**************************** Solution 1: Brute force - O(n2) ********************************************/
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let startIdx = nums2.indexOf(nums1[i]);
    let foundNextGreater = false;

    for (let j = startIdx; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        foundNextGreater = true;
        break;
      }
    }
    if (!foundNextGreater) result.push(-1);
  }

  return result;
};

/**************************** Solution 2:  Monotonic stack - 单调栈_模版变形题 O(n) ***********************************/
var nextGreaterElement = function (nums1, nums2) {
  let resultMap = new Map();
  let monoStack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (monoStack.length && monoStack[monoStack.length - 1] <= nums2[i]) {
      monoStack.pop();
    }

    resultMap.set(
      nums2[i],
      monoStack.length ? monoStack[monoStack.length - 1] : -1
    );
    monoStack.push(nums2[i]);
  }
  // console.log(resultMap)

  let result = [];
  nums1.forEach((n) => result.push(resultMap.get(n)));
  return result;
};
