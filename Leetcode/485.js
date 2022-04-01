/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
input: [1,1,0,1,1,1]
output: 3
*/

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let tempCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      tempCount += 1;
      maxCount = Math.max(maxCount, tempCount)
    } else {
      tempCount = 0;
    }
  }

  return maxCount;
};