/**
 * @param {number[]} nums
 * @return {number}
 */

//解法1:
 var pivotIndex = function(nums) {
     
  for(let i=0; i<nums.length;i++){
      let leftSum=sum(nums.slice(0,i));
      let rightSum=sum(nums.slice(i+1));
      if(leftSum===rightSum)  
          return i;
  }
  return -1;

};

const sum=arr=>arr.reduce((prev,curr)=> prev+curr, 0)


//解法2:
var pivotIndex = function(nums) {
    
  let allSum = nums.reduce((acc,cur)=>acc+cur);
  let leftSum = 0;
  
  for(let i=0; i<nums.length; i++){
      if(leftSum === allSum-leftSum-nums[i]) return i;
      leftSum+=nums[i]
  }
    
   return -1
};
