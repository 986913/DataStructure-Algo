/**
  Sorted Index
    In this coding challenge, you will implement a function called sortedIndex, 
    which takes an array and a value as input and returns the index at which the value should be inserted into the array in order to maintain its sorted order.

    The sortedIndex function should work with arrays that contain numbers or strings. 
    The array will be sorted in ascending order. If the value to be inserted is already present in the array, 
    the function should return the index of the existing value.

  Directions
    The input array will contain only numbers or only strings.
    The input array may be empty.
 */

/**************************** Binary Search (求 left bound) ****************************/
const sortedIndex = (arr, value) => {
  if (arr.length === 0) return 0;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (value < arr[mid]) {
      right = mid - 1;
    } else if (value > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1; // 哪怕相等，也把右边界往左拉，逼着它继续向左压缩
    }
  }

  return left;
};
