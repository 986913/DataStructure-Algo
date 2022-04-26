/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  let result = [];
  nums.sort((a,b)=>a-b)

  for(let i=0; i<nums.length-3; i++){
    if(i>0 && nums[i]===nums[i-1]) continue;     // skip same element to avoid duplicate quadruplets

    for(let j=i+1; j<nums.length-2; j++){
      if(nums[j]===nums[j-1] && j!==i+1) continue;      // skip same element to avoid duplicate quadruplets
      twoSum(nums, target, i, j, result);
    }
  }
  return result;
};

const twoSum = (arr, target, first, second, quadruplets) => {
  let low = second+1; 
  let high = arr.length-1;

  while(low<high){
    let sum = arr[first]+arr[second]+arr[low]+arr[high];

    if(sum===target){ // found the quadruplet
      quadruplets.push([arr[first],arr[second],arr[low],arr[high]]);
      while(low<high && arr[low]===arr[low+1]) low++; // skip same element to avoid duplicate quadruplets
      while(low<high && arr[high]===arr[high-1]) high--; // skip same element to avoid duplicate quadruplets
  
      low++;
      high--;
    }
    else if(sum<target){
      low++ 
    }else{
      high--
    }
  }
}