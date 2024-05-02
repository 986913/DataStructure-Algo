/**
 * @param {string} s
 * @return {number}
 */

/**
  1. 确定dp数组以及下标的含义: dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]
  2. 确定递推公式: 
      if (s[i] === s[j]) 
        dp[i][j] = dp[i + 1][j - 1] + 2;
      else 
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);

  3. dp数组如何初始化:
      for (let i = 0; i < strLen; i++) {
        dp[i][i] = 1;
      }
  4. 确定遍历顺序:
  5. 举例推导dp数组: 
*/

/* ------------------------  Solution: DP  ------------------------------------------- */
const longestPalindromeSubseq = (s) => {
  const strLen = s.length;
  let dp = Array(strLen + 1)
    .fill(0)
    .map((x) => Array(strLen + 1).fill(0));

  for (let i = 0; i < strLen; i++) {
    dp[i][i] = 1;
  }

  for (let i = strLen - 1; i >= 0; i--) {
    for (let j = i + 1; j < strLen; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][strLen - 1];
};
