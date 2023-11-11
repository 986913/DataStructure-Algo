/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function (nums) {
  const product = nums.reduce((acc, cur) => acc * cur);
  return signFunc(product);
};
// helper function:
const signFunc = (n) => {
  if (n > 0) return 1;
  else if (n < 0) return -1;
  return 0;
};
