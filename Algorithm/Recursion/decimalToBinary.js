/**
 * Write a function that takes a number testVariable and returns a string that is its equivalent binary number.
 */

function decimalToBinary(testVariable) {
  if (testVariable <= 1) return String(testVariable);

  // to keep track of the remainder and the leftover dividend, when a number is divided by 2
  return (
    decimalToBinary(Math.floor(testVariable / 2)) +
    decimalToBinary(testVariable % 2)
  );
}

/**
 * https://www.educative.io/module/lesson/recursion-in-javascript/39DWwpN189R
 *
 * decimalToBinary(0)	 --> 0
 * decimalToBinary(11) --> 1011
 * decimalToBinary(1)  --> 1
 * decimalToBinary(5)  --> 101
 **/
