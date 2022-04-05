/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortArrayByParity = function(nums) {
  let even = [];
  for(let i=nums.length-1; i>=0; i--){
    if(nums[i]%2===0){
      even.push(nums[i]);
      nums.splice(i,1)
    }  
  }
     
  return [...even, ...nums]
 };