/*
  write a function called power, which accepts a base and exponent,
  the function should return the power of the base to the exponent,
  this function should mimic the Math.pow()


  eg： 
      power(2,0)   //1
      power(2,1)   //2
      power(2,2)   //4
      power(2,3)   //8
 */

function power(base, exponent){
  if(exponent === 0) return 1;
  exponent--;
  return base * power(base, exponent)
}
