/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  let missing;

  for (let i = 0; i <= nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) count++;
    }

    if (count === 0) missing = i;
  }

  return missing;
};
