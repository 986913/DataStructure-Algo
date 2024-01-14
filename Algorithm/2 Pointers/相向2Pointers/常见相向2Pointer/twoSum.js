/**
 * implement the findSum(arr, value) function, which takes an array arr, a number and value as input
 * and returns an array of two numbers that add up to value.
 *
 *   findSum( [1,21,3,14,5,60,7,6], 81)  ---> [21,60]
 *   findSum( [-2,3,8,2], 10)            ---> [8 , 2]
 *   findSum( [-2,3],     10)            ---> false
 */

/*------------ Solution1: hash map -------------------------------------------------------- */
function findSum(arr, target) {
  let seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (seen.has(diff)) {
      return [diff, arr[i]];
    }
    seen.set(arr[i], i); //或者seen.set(arr[i], arr[i]);  因为这里给key设置什么value不重要， 反正用不到
  }
  return false;
}

/*------------ Solution2: sort + 2pointer -------------------------------------------------------- */
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

/*------------ Solution3: Brute Force -------------------------------------------------------- */
function findSum(arr, value) {
  for (var j = 0; j < arr.length; j++) {
    for (var k = j + 1; k < arr.length; k++) {
      if (arr[j] + arr[k] == value) return [arr[j], arr[k]];
    }
  }
  return false;
}
console.log(findSum([1, 2, 3, 4], 6));
console.log(findSum([1, 2, 3, 4], 10));
