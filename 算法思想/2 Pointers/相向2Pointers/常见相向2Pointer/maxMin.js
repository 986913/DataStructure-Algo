/**
Problem Statement 
  Implement a function called maxMin(arr), which will rearrange the elements of a sorted array 
  so that the first position will have the largest number, the second will have the smallest, 
  and the third will have the second-largest and so on. In other words, 
  all the odd-numbered indices will have the largest numbers in the array in descending order, 
  and the even-numbered indices will have the smallest numbers in ascending order.
Note: The given array is sorted in ascending order.

Input : A sorted array
Output : An array with elements stored in max/min form

maxMin([1,2,3,4,5,6,7]) ------> [7,1,6,2,5,3,4]
maxMin([1,2,3,4,5])     ------> [5,1,4,2,3]
 */

/*----------- solution 1: use extra array--------------- */
function maxMin(arr) {
  let len = arr.length;
  let result = [];

  let left = 0;
  let right = len - 1;

  while (left < right) {
    result.push(arr[right]);
    result.push(arr[left]);
    right--;
    left++;
  }
  result.push(arr[left]);

  return result;
}
/*********************  Solution2: Two pointers 👍 **********************/
function maxMin(arr) {
  var maxIdx = arr.length - 1;
  var minIdx = 0;
  var maxElem = arr[maxIdx] + 1; // store any element that is greater than the maximum element in the array

  for (var i = 0; i < arr.length; i++) {
    // at even indices we will store maximum elements
    if (i % 2 == 0) {
      arr[i] += Math.floor((arr[maxIdx] % maxElem) * maxElem);
      maxIdx -= 1;
    } else {
      // at odd indices we will store minimum elements
      arr[i] += Math.floor((arr[minIdx] % maxElem) * maxElem);
      minIdx += 1;
    }
  }

  // dividing with maxElem to get original values.
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(arr[i] / maxElem);
  }

  return arr;
}

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('Array before min/max:');
// console.log(arr);
// console.log('Array after min/max: ');
// console.log(maxMin(arr));
