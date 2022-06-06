/**
 * @param {number} n
 * @return {boolean}
 */

const squareSum = (number) => {
  let sum = 0;

  while (number > 0) {
    let digital = number % 10;
    sum += Math.pow(digital, 2);
    number = Math.floor(number / 10);
  }
  return sum;
};

var isHappy = function (n) {
  let slow = n;
  let fast = n;

  while (true) {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
};
