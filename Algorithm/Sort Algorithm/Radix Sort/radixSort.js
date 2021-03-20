/* Radix sorting:   */

/* helper function:

in order to implement radix sort, it's helpful to build helper function first,
getDigit(num, place)- returns the digit in num at the given place value

eg:
    getDigit(12345, 0)    //5
    getDigit(12345, 1)    //4
    getDigit(12345, 2)    //3
    getDigit(12345, 3)    //2
    getDigit(12345, 4)    //1
    getDigit(12345, 5)    //0
*/
