/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  这道题给了个正整数数组，让从中选三个数当作三角形的三条边，问能组成的三角形的最大周长是多少。
  因为要组成三角形，所以必须要满足两边之和大于第三边这一条性质，
  我们并不用去检测所有的组合情况，而是只要判断较短的两边之和是否大于最长的那条边就可以了。
  虽然这道是 Easy 题目，但是 OJ 仍然不让用暴力搜索法，遍历任意三条边是会超时的。所以只能想优化的解法，
  既然要周长最长，则肯定是选较大的数字先测比较好。
  这里就先给数组排个序，然后从末尾开始，每次取出三个数字，先检测能否组成三角形，可以的话直接返回周长，不行的话就继续往前取，若都不行的话，就返回0
*/

var largestPerimeter = function(nums) {
  nums.sort((a,b)=>a-b);
  let perimeter= 0;
  for(let i=nums.length; i>0; i--){
    if(nums[i-1]+nums[i-2]>nums[i]){
      perimeter = nums[i]+nums[i-1]+nums[i-2];
      return perimeter
    }
  }
  return perimeter
};