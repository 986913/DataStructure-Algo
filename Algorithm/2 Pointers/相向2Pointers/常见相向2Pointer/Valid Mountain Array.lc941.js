/**
 * @param {number[]} arr
 * @return {boolean}
 */

/***********************Solution 1: 👍 Two pointer *********************************/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let left = 0;
  let right = arr.length - 1;

  // 注意防止越界
  while (left < arr.length && arr[left] < arr[left + 1]) {
    left++;
  }
  while (right > 0 && arr[right] < arr[right - 1]) {
    right--;
  }

  //如果left和right在中间相遇，且left和right都不是在开始的位置 那说明就是山峰, 比如[0,3,2,1]： left=right=1
  if (left == right && left !== 0 && right !== arr.length - 1) return true;

  /* case like these all return false, 不符合山峰
        [0,1,2], left=right=2, right在开始位置 
        [5,4,3], left=right=0. left在开始位置
        [3,5,5]  left=1, right=2, left!=right
    */
  return false;
};

/**********************Solution 2: **********************************/
var validMountainArray = function (arr) {
  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    } else if (arr[i] < arr[i + 1]) {
      isIncreasing = true;
      if (isDecreasing) return false;
    } else {
      isDecreasing = true;
      if (!isIncreasing) return false;
    }
  }

  return isDecreasing && isIncreasing;
};
