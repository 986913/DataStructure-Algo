/**
 * @param {number[]} nums
 * @return {number[]}
 */

/************************* Solution 1: easy understand   *****************************/
var sortArrayByParityII = function (nums) {
  let result = [];

  const oddArr = nums.filter((n) => n % 2 !== 0);
  const evenArr = nums.filter((n) => n % 2 === 0);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(evenArr.pop());
    } else {
      result.push(oddArr.pop());
    }
  }

  return result;
};
// console.log(sortArrayByParityII([3, 1, 4, 2])); //[2,1,4,3]

/************************* Solution 2.1:  two pointer with 辅助数组  *****************************/
var sortArrayByParityII = function (nums) {
  let evenIdx = 0;
  let oddIdx = 1;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[evenIdx] = nums[i];
      evenIdx += 2;
    } else {
      result[oddIdx] = nums[i];
      oddIdx += 2;
    }
  }

  return result;
};
// console.log(sortArrayByParityII([3, 1, 4, 2])); //[2,1,4,3]

/************************* Solution 2.2: 👍 two pointer - In Place *****************************/
var sortArrayByParityII = function (nums) {
  let evenIdx = 0;
  let oddIndex = 1;

  while (evenIdx < nums.length) {
    // 在偶数位遇到了奇数
    if (nums[evenIdx] % 2 === 1) {
      while (nums[oddIndex] % 2 !== 0) oddIndex += 2; //在奇数位找一个偶数
      [nums[oddIndex], nums[evenIdx]] = [nums[evenIdx], nums[oddIndex]]; // swap
    }

    evenIdx += 2;
  }

  return nums;
};

/* while loop version - 道理是一样的:

  var sortArrayByParityII = function (nums) {
    let oddIndex = 1;
    for (let evenIdx = 0; evenIdx < nums.length; evenIdx += 2) {
      if (nums[evenIdx] % 2 === 1) {
        while (nums[oddIndex] % 2 !== 0) oddIndex += 2; 
        [nums[oddIndex], nums[evenIdx]] = [nums[evenIdx], nums[oddIndex]]; 
      }
    }
    return nums;
  };

*/
