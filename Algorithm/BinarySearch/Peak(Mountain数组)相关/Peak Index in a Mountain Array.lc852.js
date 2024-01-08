/**
 * @param {number[]} arr
 * @return {number}
 */

var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // condition changed: 因为峰值 比其相邻的2个元素都大...
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      //找到了peak
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      // peak处于右半段
      left = mid + 1;
    } else if (arr[mid] < arr[mid - 1]) {
      // peak处于左半段
      right = mid - 1;
    }
  }
};
