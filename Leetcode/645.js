/**
 * @param {number[]} nums : [3,2,3,4,6,5]
 * @return {number[]}: [3,1]
 */
var findErrorNums = function (nums) {
  let dup;
  let missing;

  for (let i = 1; i <= nums.length; i++) {
    // outer for each is like: 1,2,3,4,5,6
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      // 3,2,3,4,6,5
      if (nums[j] == i) count++;
    }
    if (count == 2) dup = i;
    else if (count == 0) {
      missing = i;
    }
  }

  return [dup, missing];
};
