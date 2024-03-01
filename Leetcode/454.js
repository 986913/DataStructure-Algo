/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

/************************************Solution: Hash table *******************************************/
/*
  首先定义一个map, 遍历nums1和nums2数组，统计两个数组元素之和，和元素之和出现的次数，放到map中
  {放a和b两数之和(key): 放a和b两数之和出现的次数(value)} 

  再遍历nums3和nums4数组，如果在map中有key: 0-(c+d)出现过的话，就用count把map中key对应的value也就是出现次数统计出来
  最后返回统计值 count 就可以了
*/
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let twoSumMap = new Map();
  let count = 0;

  for (let n1 of nums1) {
    for (let n2 of nums2) {
      let sum = n1 + n2;
      twoSumMap.set(sum, twoSumMap.get(sum) + 1 || 1);
    }
  }

  for (let n3 of nums3) {
    for (let n4 of nums4) {
      let sum = n3 + n4;
      count += twoSumMap.get(0 - sum) || 0;
    }
  }

  return count;
};
