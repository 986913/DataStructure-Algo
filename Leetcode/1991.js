var findMiddleIndex = function(nums) {
  let allSum = nums.reduce((acc,cur)=>acc+cur);
  let leftSum = 0;

  for(let i=0; i<nums.length; i++){
    if(leftSum === allSum-leftSum-nums[i]) return i;
    leftSum+=nums[i]
  }

  return -1
};