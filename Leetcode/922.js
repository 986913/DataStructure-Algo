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
    // 当偶数位是奇数时：
    if (nums[evenIdx] % 2 === 1) {
      while (nums[oddIndex] % 2 !== 0) oddIndex += 2; //持续的在奇数位找一个偶数， 得到oddIndex
      [nums[oddIndex], nums[evenIdx]] = [nums[evenIdx], nums[oddIndex]]; // 然后进行swap
    }

    evenIdx += 2; // evenIdx是持续+2的
  }

  return nums;
};
