/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/* ------------------------------------ DP （lc718变形题）------------------------------------  */
/**
 * 我们只要想到 用二维数组可以记录两个字符串的所有比较情况，这样就比较好推 递推公式了。 动规五部曲分析如下：
  1. 确定dp数组以及下标的含义: 
      dp[i][j]：长度为[0, i - 1]的字符串text1 与 长度为[0, j - 1]的字符串text2 的最长公共子序列为dp[i][j]

  2. 确定递推公式: 
      if (text1[i-1] === text2[j-1])  
        dp[i][j] = dp[i-1][j-1] +1;;
      else 
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])

  3. dp数组如何初始化: 
      dp[i][0] 和dp[0][j]初始化为0

  4. 确定遍历顺序:
      for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
          
        }
      }
  5. 举例推导dp数组: 
*/

const longestCommonSubsequence = (text1, text2) => {
  let dp = Array(text1.length + 1)
    .fill(0)
    .map((x) => Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
};
