/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let len = nums.length;
  if (len === 1) return 0;

  let flag = 0; // flag ===1代表go up,  flag===-1 代表go down
  let peakIndexs = []; // indexs arrary holds all index of peak values

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      flag = 1;
      if (i === len - 1 && peakIndexs.length === 0) return len - 1; // [1,2,3,4,5] this case
    } else if (nums[i] < nums[i - 1]) {
      if (flag === 1) {
        //reached peak
        peakIndexs.push(i - 1);
      }
      flag = -1;
      if (i === len - 1 && peakIndexs.length === 0) return 0; // [5,4,3,2,1] this case
    }
  }

  // console.log(peakIndexs);
  return peakIndexs[0]; // return any from peakIndexs
};
