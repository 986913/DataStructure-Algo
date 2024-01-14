/**
 * Implement a function, reArrange(arr),
 * which sorts the elements so that all the negative elements appear on the left,
 * and all positive elements appear at the right.
 *
 * eg: reArrange([10,-1,20,4,5,-9,-6])   // [-1,-9,-6,10,20,4,5]
 *     reArrange([0,0,0,-2])             // [-2,0,0,0]
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
  }

  return arr;
}
