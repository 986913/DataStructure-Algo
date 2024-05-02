/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * 我们只要想到 用二维数组可以记录两个字符串的所有比较情况，这样就比较好推 递推公式了。 动规五部曲分析如下：
 * 
  1. 确定dp数组以及下标的含义: 
      dp[i][j] ：以下标i - 1为结尾的A，和以下标j - 1为结尾的B，其最长重复子数组长度为dp[i][j]。 
    （特别注意： “以下标i - 1为结尾的A” 标明一定是 以A[i-1]为结尾的字符串 ）

  2. 确定递推公式: 
    根据dp[i][j]的定义，dp[i][j]的状态只能由dp[i - 1][j - 1]推导出来。
    即当A[i - 1] 和B[j - 1]相等的时候，dp[i][j] = dp[i - 1][j - 1] + 1;
    根据递推公式可以看出，遍历i 和 j 要从1开始！

  3. dp数组如何初始化: 
    根据dp[i][j]的定义，dp[i][0] 和dp[0][j]其实都是没有意义的！但dp[i][0] 和dp[0][j]要初始值，因为 为了方便递归公式dp[i][j] = dp[i - 1][j - 1] + 1;
    所以dp[i][0] 和dp[0][j]初始化为0。

  4. 确定遍历顺序:
    外层for循环遍历A，内层for循环遍历B。那又有同学问了，外层for循环遍历B，内层for循环遍历A。不行么？
    也行，一样的，我这里就用外层for循环遍历A，内层for循环遍历B了。
    同时题目要求长度最长的子数组的长度。所以在遍历的时候顺便把dp[i][j]的最大值记录下来。
    for (let i = 1; i <= A.length; i++) {
      for (let j = 1; j <= B.length; j++) {
          if (A[i - 1] ] == B[i - 1] ) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          }
          result = Math.max(result, dp[i][j]);
      }
    }

  5. 举例推导dp数组: 
*/

/* ------------------------------------ DP ------------------------------------  */
const findLength = (A, B) => {
  const [m, n] = [A.length, B.length]; // A、B数组的长度

  // dp数组初始化，都初始化为0
  const dp = new Array(m + 1).fill(0).map((x) => new Array(n + 1).fill(0));
  // 初始化最大长度为0
  let result = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 遇到A[i - 1] === B[j - 1]，则更新dp数组
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      // 更新result
      result = Math.max(result, dp[i][j]);
    }
  }

  // 遍历完成，返回result
  return result;
};
