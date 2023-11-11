/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  // for common case, like: [1,2] [1,2,9]
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  // for special case: [9] [9,9,9] etc. (make [9,9,9], [1,0,0,0] not [0,0,0])
  return [1, ...digits];
};
