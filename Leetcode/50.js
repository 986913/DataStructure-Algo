/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;
  else if (n === 1) return x;
  else if (n < 0) return myPow(1 / x, Math.abs(n));

  return n % 2 == 0 ? myPow(x * x, n / 2) : myPow(x * x, Math.floor(n / 2)) * x;
};
