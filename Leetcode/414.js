/**
 * @param {number[]} nums
 * @return {number}
 *
 * thridMax([1,2,3])  -->output: 1
 */
var thirdMax = function (nums) {
  let sortedArrSet = [...new Set(nums.sort((a, b) => b - a))];

  if (sortedArrSet.length <= 2) return sortedArrSet[0];
  else return sortedArrSet[2];
};
