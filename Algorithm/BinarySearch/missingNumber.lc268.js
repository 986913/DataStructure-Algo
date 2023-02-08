/**
 * @param {number[]} nums
 * @return {number}
 */

/* -------------------- 👍 Solution 1 : Math  ---------------------------- */

/* 
  1. calculate the expected sum from 1 to n.
  2.then calculate the actually sum of input array
  3.missing number = expected sum - actual sum
*/
var missingNumber = function (nums) {
  const actualSum = nums.reduce((acc, cur) => acc + cur);
  let expectedSum = 0;
  for (let i = 1; i <= nums.length; i++) {
    expectedSum += i;
  }
  return expectedSum - actualSum;
};

/* -------------------- 👍 Solution 2 : Bit operation  ------------------- */

/*
  Smilar with above Math calculate,
  1.calculate the expected XOR from 1 to n.
  2.then calculate the actually XOR of input array
  3.missing number = expected XOR ^ actual XOR
*/
var missingNumber = function (nums) {
  let actualXOR = nums.reduce((acc, cur) => acc ^ cur);
  let expectedXOR = 0;
  for (let i = 1; i <= nums.length; i++) {
    expectedXOR ^= i;
  }

  return actualXOR ^ expectedXOR;
};

/* -------------------- 👍 Solution 3 : Compare index  ------------------- */

/*
  1. sorted array first
  2. to see if the index is same with current element, if they are not same, then return index
  3. if all equals, return array's length
*/
const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};

/* -------------------- 👍 Solution 4 : Binary Search  ------------------- */
const missingNumber = (nums) => {
  let sorted = nums.sort((a, b) => a - b); // sorted first

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (sorted[mid] > mid) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};

/* --------------------  Solution 5 : Double for-loop ------------------- */
const missingNumber = (nums) => {
  let missing; //missing is output

  //outer loop is standard
  for (let i = 0; i <= nums.length; i++) {
    let count = 0; //count for frequency

    //inner loop is input
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) count++; //if duplicated, count++
    }

    if (count === 0) missing = i; //i is the missing one
  }

  return missing;
};
