var dominantIndex = function(nums) {
  let numsCopy = [...nums];
  nums.sort((a,b)=>a-b);
  if(nums.length===1) return 0;
  if(nums.length >1 && (nums[nums.length-1] >=nums[nums.length-2]*2)) return numsCopy.indexOf(nums[nums.length-1])
  return -1
};