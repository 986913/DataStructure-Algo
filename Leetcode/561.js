/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
  let sum = 0;
  let left = 0;
  let right = 1;

 nums.sort((a,b)=>a-b); 
 while(right<= nums.length-1){
    sum+=Math.min(nums[left],nums[right]);
    left+=2;
    right+=2
 }
  return sum;
};