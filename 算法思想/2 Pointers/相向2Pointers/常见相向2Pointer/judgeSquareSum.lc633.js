/**
 * @param {number} c
 * @return {boolean}
 */
/*********************  Solution: Two pointers 👍 **********************/
const judgeSquareSum = (c) => {
  if (c >= 0 && c < 3) return true;

  let left = 0;
  let right = Math.floor(Math.pow(c, 0.5));
  while (left <= right) {
    const squredSum = Math.pow(left, 2) + Math.pow(right, 2);
    if (squredSum === c) {
      return true;
    } else if (squredSum < c) {
      left++;
    } else if (squredSum > c) {
      right--;
    }
  }
  return false;
};
