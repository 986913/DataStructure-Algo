/**
 * @param {number[]} nums
 * @return {number}
 */

 var findNumbers = function(nums) {
  let count = 0;
  nums.forEach(n=>{
      if(n.toString().length % 2 === 0)
          count+=1
  })
  return count
};