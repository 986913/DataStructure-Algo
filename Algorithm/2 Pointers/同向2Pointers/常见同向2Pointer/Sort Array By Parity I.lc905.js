/**
 * @param {number[]} nums
 * @return {number[]}
 */
/********************* Solution1 (不推荐): Build in method ***************************/
var sortArrayByParity = function (nums) {
  let even = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
      nums.splice(i, 1);
    }
  }

  return [...even, ...nums];
};

/********************* Solution2 👍👍👍 : Two pointer - In Place ***************************/
const sortArrayByParity = (A) => {
  let slow = 0;
  let fast = 0;

  while (fast < A.length) {
    //A[fast]是偶数的时候：swap A[slow]和 A[fast], then update slow
    if (A[fast] % 2 === 0) {
      [A[fast], A[slow]] = [A[slow], A[fast]]; //swap A[slow]和 A[fast]
      slow++; // update slow
    }

    fast++; // fast 是持续++的
  }

  return A;
};
