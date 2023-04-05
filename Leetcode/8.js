/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MIN = -Math.pow(2, 31);
  const MAX = Math.pow(2, 31) - 1;

  const ans = Number.parseInt(s);

  if (ans) {
    if (ans <= MIN) return MIN; // Less than INT_MIN(32 bit)
    else if (ans >= MAX) return MAX; // Greater than INT_MAX(32 bit)
    else return ans;
  } else {
    return 0; // for NaN
  }
};
