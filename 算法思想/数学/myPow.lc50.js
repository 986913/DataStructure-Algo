/*
  write a function called pow, which accepts a base and exponent,
  the function should return the power of the base to the exponent,
  this function should mimic the Math.pow()
  eg： 
      pow(2,0)   //1
      pow(2,1)   //2
      pow(2,2)   //4
      pow(2,3)   //8
      pow(4, -1)
 */

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
