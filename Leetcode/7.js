/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);

  let result = 0;
  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10); //对小数取整， eg: 3.6666 --> 3

    //检查结果是否超出32位有符号整数的取值范围。32位有符号整数的取值范围是[-2^31, 2^31-1]，即[-2147483648, 2147483647]。
    if (result > max / 10 || (result === max / 10 && digit > 7)) return 0;
    if (result < min / 10 || (result === min / 10 && digit < -8)) return 0;

    result = result * 10 + digit;
  }

  return result;
};
