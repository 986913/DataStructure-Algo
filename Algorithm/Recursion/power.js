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

function pow(base, exponent) {
  if (exponent < 0) return 1 / pow(base, -exponent);
  if (exponent === 0) return 1;
  return base * pow(base, exponent - 1);
}
