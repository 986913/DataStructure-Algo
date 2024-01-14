/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // difference is here: condition changed
    if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      return true; // <--- difference is here
    }
  }

  return false; // <--- difference is here
};
