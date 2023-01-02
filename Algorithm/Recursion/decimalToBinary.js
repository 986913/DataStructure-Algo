/**
 * Write a function that takes a number testVariable and returns a string that is its equivalent binary number.
 */

function decimalToBinary(testVariable) {
  if (testVariable <= 1) return String(testVariable);

  return (
    decimalToBinary(Math.floor(testVariable / 2)) +
    decimalToBinary(testVariable % 2)
  );
}

/**
 * decimalToBinary(0)	 --> 0
 * decimalToBinary(11) --> 1011
 * decimalToBinary(1)  --> 1
 * decimalToBinary(5)  --> 101
 **/
