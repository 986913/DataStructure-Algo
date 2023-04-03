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

  //初始化 leftProduct第一项 和 rightProduct最后一项
  leftProduct[0] = 1;
  rightProduct[len - 1] = 1;

  //从左到右创建leftProduct
  for (let i = 1; i < len; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }
  //从右到左创建rightProduct
  for (let i = len - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
  }

  //结果就是leftProduct和rightProduct每一项相乘
  return leftProduct.map((item, index) => item * rightProduct[index]);
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

/* --------------------------Solution 3: Brute force (double for loop) ---------------------------- */
var productExceptSelf = function (nums) {
  let result = [];
  let leftProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    let rightProduct = 1;

    for (let j = i + 1; j < nums.length; j++) {
      rightProduct *= nums[j]; //算出i+1 到 最右边 的乘积
    }

    result.push(leftProduct * rightProduct); // update result

    leftProduct *= nums[i]; // update leftProduct (也就是 最左边 到 i 的乘积)
  }

  return result;
};
