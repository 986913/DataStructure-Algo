/**
 * Power Sum
 *
 * Given two integers X and N, find the number of ways that X can be expressed
 * as the sum of the N-th powers of unique natural numbers.
 *
 * Each number can be used at most once, and the order of numbers does not matter.
 *
 * ---
 * Problem Description:
 *
 * You are given:
 * - An integer X, the target sum
 * - An integer N, the power to which natural numbers are raised
 *
 * Your task is to determine how many unique combinations of natural numbers
 * raised to the power N will sum exactly to X.
 *
 * ---
 * Function Signature:
 *
 * powerSum(X: number, N: number): number
 *
 * ---
 * Parameters:
 * @param {number} X
 *   The target integer to be represented as a sum.
 * @param {number} N
 *   The power to which each natural number is raised.
 *
 * ---
 * Returns:
 * @returns {number}
 *   The number of distinct combinations where the sum of N-th powers
 *   of unique natural numbers equals X.
 *
 * ---
 * Constraints:
 * - All numbers are positive integers.
 * - Each natural number can be used at most once.
 * - Combinations are counted without regard to order.
 *
 * ---
 * Example 1:
 * Input:
 *   X = 10
 *   N = 2
 * Output: 1
 * Explanation:
 *   10 = 1^2 + 3^2
 *
 * ---
 * Example 2:
 * Input:
 *   X = 100
 *   N = 2
 * Output: 3
 * Explanation:
 *   100 can be expressed as:
 *   - 10^2
 *   - 8^2 + 6^2
 *   - 1^2 + 3^2 + 4^2 + 5^2 + 7^2
 *
 * ---
 * Example 3:
 * Input:
 *   X = 100
 *   N = 3
 * Output: 1
 * Explanation: 100 = 4^3 + 3^3 + 2^3 + 1^3
 *
 */

/**************************** Solution1:  Backtracking (ie:多叉树遍历框架)  *****************************
  Time: Exponential ≈ O(2^k), k ≈ X^(1/N) 因为每个数都有“选 / 不选”两种情况
  Space: Linear (excluding output): 因为递归深度最多是可选数字个数
*/

function powerSum(X, N) {
  let result = [];

  const backtracking = (startIdx, curSum, curPath) => {
    //base condition
    if (curSum === X) result.push([...curPath]);
    if (curSum > X) return;

    for (let i = startIdx; i < X; i++) {
      curPath.push(i);
      curSum += Math.pow(i, N);
      backtracking(i + 1, curSum, curPath);
      curSum -= Math.pow(i, N);
      curPath.pop();
    }
  };
  backtracking(1, 0, []);

  return result.length;
}

/**************************** Solution2:  DFS  *****************************
  Time: Exponential ≈ O(2^k), k ≈ X^(1/N) 因为每个数都有“选 / 不选”两种情况
  Space: Linear (excluding output): 因为递归深度最多是可选数字个数
*/
function powerSum(X, N) {
  const dfs = (startIdx, curSum) => {
    //base condition
    if (curSum === X) return 1;
    if (startIdx > X) return 0;

    let count = 0;
    for (let i = startIdx; Math.pow(i, N) + curSum <= X; i++) {
      count += dfs(i + 1, curSum + Math.pow(i, N));
    }
    return count;
  };
  return dfs(1, 0);
}
/**************************** Solution2:  DFS + Memo备忘录  ******************************/
function powerSum(X, N) {
  let memo = {};

  const dfs = (startIdx, curSum, memo) => {
    let key = `${startIdx}-${curSum}`;
    if (memo[key]) return memo[key];

    //base condition
    if (curSum === X) return 1;
    if (startIdx > X) return 0;

    let count = 0;
    for (let i = startIdx; Math.pow(i, N) + curSum <= X; i++) {
      count += dfs(i + 1, curSum + Math.pow(i, N), memo);
    }
    memo[key] = count;
    return count;
  };
  return dfs(1, 0, memo);
}
