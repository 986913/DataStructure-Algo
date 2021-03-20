/* Radix sorting:   */

/* helper function1 :
getDigit(num, place)- returns the digit in num at the given place value
eg:
    getDigit(12345, 0)    //5
    getDigit(12345, 1)    //4
    getDigit(12345, 2)    //3
    getDigit(12345, 3)    //2
    getDigit(12345, 4)    //1
    getDigit(12345, 5)    //0
*/
const getDigit = (num, place) => Math.floor(Math.abs(num)/Math.pow(10, place))%10

/* helper function2: digitCount-> return the counts of all digital
  eg:
      digitCount(14)       //2
      digitCount(0)        //1
      digitCount(8353)     //4
 */
const digitCount = n => {
  if(n===0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1
}