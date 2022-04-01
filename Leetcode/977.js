/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  return nums.map(n=>Math.pow(n,2)).sort((a,b)=>a-b)
};