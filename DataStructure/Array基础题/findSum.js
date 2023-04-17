/**
  Problem Statement 
  In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.
  Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return false.

  Input : An array and a number value
  Output: An array with two integers a and b ([a,b]) that add up to value

  findSum([1,21,3,14,5,60,7,6], 81) ---> [21,60]
  findSum([1,2,3,4], 10)            ---> false

 */

function findSum(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
