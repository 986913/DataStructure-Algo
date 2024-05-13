/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*************************** Solution 1:  Brute force (double for-loop) ****************************/
var productExceptSelf = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      product *= nums[j];
    }
    res.push(product);
  }

  return res;
};

/*************************** Solution 2: left and right product lists 时空复杂度都是O(N) ****************************/
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

/*************************** Solution 3: left and right product lists 时间O(N) 空间O(1) ****************************/
const productExceptSelf = (nums) => {
  let len = nums.length;
  let result = new Array(len);
  result[0] = 1;

  for (let i = 1; i < len; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let rightProduct = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};
