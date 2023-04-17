/**
Problem Statement 
Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, and all positive elements appear at the right.

While zero is NOT positive or negative, we consider zero to be a positive​ integer for this challenge!

Input: An array containing positive and negative elements
Output:A sorted array with negative elements at the left and positive elements at the right

reArrange([-1,5,-4,-3]) ---> [-1,-4,-3,5]
reArrange([300,-1,3,0]) ---> [-1,300,3,0]
reArrange(0,0,0,-2)     ---> [-2,0,0,0]
 */

function reArrange(arr) {
  let slow = 0;
  let fast = 0;

  while (fast < arr.length) {
    if (arr[fast] < 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
    fast++;
    /* 和下面这个一样：
    if (arr[fast] >= 0) {
      fast++;
    } else {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
      fast++;
    }*/
  }

  return arr;
}
