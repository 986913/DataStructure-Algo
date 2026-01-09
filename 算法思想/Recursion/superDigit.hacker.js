/**
 * Calculates the super digit of a number formed by concatenating
 * the numeric string `n` exactly `k` times.
 *
 * -----------------------------------------
 * What is a Super Digit?
 * -----------------------------------------
 * The super digit of a number is obtained by repeatedly summing its digits
 * until only a single-digit number remains.
 *
 * Example:
 *   9875
 *   → 9 + 8 + 7 + 5 = 29
 *   → 2 + 9 = 11
 *   → 1 + 1 = 2
 *   → super digit = 2
 *
 * -----------------------------------------
 * Key Optimization Insight
 * -----------------------------------------
 * Instead of building the huge number by concatenating `n` k times,
 * we use the following property:
 *
 *   superDigit(n repeated k times)
 * = superDigit(sumOfDigits(n) × k)
 *
 * -----------------------------------------
 * Step-by-step Example
 * -----------------------------------------
 * Input:
 *   n = "148", k = 3
 *
 * Step 1: Sum digits of n
 *   1 + 4 + 8 = 13
 *
 * Step 2: Multiply by k
 *   13 × 3 = 39
 *
 * Step 3: Compute super digit of 39
 *   3 + 9 = 12
 *   1 + 2 = 3
 *
 * Result:
 *   superDigit("148", 3) = 3
 *
 * @param {string} n
 * A string representation of a non-negative integer.
 *
 * @param {number} k
 * Number of times `n` is concatenated.
 *
 * @returns {number}
 * The super digit of the concatenated number.
 */

/****************************** Solution *****************************
  ✅ Time O(n)
    遍历字符串 n 计算每一位数字之和：O(n)
    getSuperDigit 递归：
      每一层处理的数字位数是常数级（≤ 11 位）
      递归深度也是常数
      总时间：O(1)
    整体时间复杂度：O(n)

  ✅ Space O(1)
    只使用了常数级变量（sum、char 等）
    没有创建数组、字符串或拼接 n × k
    递归调用栈深度是常数（≤ 4）
    整体空间复杂度：O(1)
*/

function superDigit(n, k) {
  let sum = 0;
  for (let char of n) {
    sum += Number(char);
  }
  sum *= k;

  return getSuperDigit(sum);
}
// helper function:
const getSuperDigit = (n) => {
  if (n < 10) return n;

  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return getSuperDigit(sum);
};
