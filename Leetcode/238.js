/**
 * @param {number[]} nums
 * @return {number[]}
 */

//https://www.youtube.com/watch?v=tSRFtR3pv74&ab_channel=NickWhite

/* -------------------------- Solution 1: -------------------------- */
const productExceptSelf = (nums) => {
  let len = nums.length;

  let leftProduct = new Array(len);
  let rightProduct = new Array(len);
  let result = new Array(len);

  leftProduct[0] = 1;
  rightProduct[len - 1] = 1;

  for (let i = 1; i < len; i++) {
    leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
  }
  for (let i = len - 2; i >= 0; i--) {
    rightProduct[i] = nums[i + 1] * rightProduct[i + 1];
  }

  for (let i = 0; i < len; i++) {
    result[i] = leftProduct[i] * rightProduct[i];
  }

  return result;
};

/* -------------------------- Solution 2 (based on solution1, minor improve..)-------------------------- */

const productExceptSelf = (nums) => {
  let len = nums.length;
  let result = new Array(len);
  result[0] = 1;

  for (let i = 1; i < len; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let R = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * R;
    R *= nums[i];
  }

  return result;
};
