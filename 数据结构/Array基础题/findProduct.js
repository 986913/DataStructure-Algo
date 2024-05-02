/**
Problem Statement 
Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.

Note: The size of an array should be greater than or equal to 2.

Input : An array of numbers (can even be floats, integers, and negative!)
Output:An array such that each index has a product of all the numbers in the array except the number stored at that index.

findProduct(1,2,3,4) ---> [24,12,8,6]
findProduct(2,5,9,3,6)--> [810,324,180,540,270]
 */

function findProduct(nums) {
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
}
