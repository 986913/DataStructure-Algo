/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

/* ------------------------ 👍 Solution: DP (lc392🟡变形题) ------------------------------- */
/*
  1. 确定dp数组以及下标的含义: dp[i][j]：以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]

  2. 确定递推公式:
      if (s[i - 1] === t[j - 1]) 
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      else 
        dp[i][j] = dp[i - 1][j];

  3. dp数组如何初始化: dp[i][0] = 1; dp[0][j]= 0; dp[0][0]= 0

  4. 确定遍历顺序: 
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= t.length; j++) {
        
      }
    }

  5. 举例推导dp数组: 
*/

const numDistinct = (s, t) => {
  let dp = Array(s.length + 1)
    .fill(0)
    .map((x) => Array(t.length + 1).fill(0));

  for (let i = 0; i <= s.length; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[s.length][t.length];
};
