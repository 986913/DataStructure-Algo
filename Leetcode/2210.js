/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let flag = 0; // flag === 1 代表 go up;    flag === -1 代表 go down
  let results = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      if (flag === -1) results++; // reached the valley
      flag = 1;
    } else if (nums[i] < nums[i - 1]) {
      if (flag === 1) results++; // reached the peak
      flag = -1;
    }
  }

  return results;
};
