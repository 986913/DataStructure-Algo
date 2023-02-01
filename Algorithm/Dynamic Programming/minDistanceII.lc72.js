/* ------------------------ 👍 Solution: DP  ------------------------------- */
/*
  1. 确定dp数组以及下标的含义: 
    dp[i][j] 表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最少编辑距离为dp[i][j]。

  2. 确定递推公式:
      if (word1[i - 1] === word2[j - 1]) //不操作
        dp[i][j] = dp[i - 1][j - 1];
      else  //增,删,换
        dp[i][j] = Min (dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)

  3. dp数组如何初始化: 
      for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i;
      }

      for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = j;
      }

  4. 确定遍历顺序: 
    for (let i = 1; i <= word1.length; i++) {
      for (let j = 1; j <= word2.length; j++) {
        
      }
    }

  5. 举例推导dp数组: 
*/

const minDistance = (word1, word2) => {
  let dp = Array(word1.length + 1)
    .fill(0)
    .map((x) => Array(word2.length + 1).fill(0));

  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }

  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[word1.length][word2.length];
};
