/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// isSubsequence(abc, ahbgdc) --> true;    isSubsequence(axc, ahbgdc) --> false

/* ------------------------ 👍 Solution1: 2pointers  ------------------------------- */
// pointer1指向s, pointer2t指向t, 遍历t，如果t的字符和s的字符match, 那就自增pointer1
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let sPointerIdx = 0;
  for (let i = 0; i < t.length; i++) {
    // if it is matching, increment sPointerIdx
    if (t[i] === s[sPointerIdx]) sPointerIdx++;
  }

  return sPointerIdx === s.length;
};

/* ------------------------ 👍 Solution2: DP (lc1143🟡变形题) ------------------------------- */
/*
  1. 确定dp数组以及下标的含义:
      dp[i][j] 表示以下标i-1为结尾的字符串s，和以下标j-1为结尾的字符串t，相同子序列的长度为dp[i][j]。

  2. 确定递推公式: 状态转移方程 
      if (s[i-1] === t[j-1])  
        dp[i][j] = dp[i-1][j-1] +1;  ---> 因为找到了一个相同的字符，相同子序列长度自然要在dp[i-1][j-1]的基础上加1（如果不理解，在回看一下dp[i][j]的定义）
      else 
        dp[i][j] = dp[i][j-1]        ---> 🟡与lc1143不同的地方: 此时相当于t要删除元素，t如果把当前元素t[j - 1]删除，那么dp[i][j] 的数值就是 看s[i - 1]与 t[j - 2]的比较结果了，即：dp[i][j] = dp[i][j - 1];
  
  3. dp数组如何初始化: dp[i][0] 和dp[0][j]初始化为0

  4. 确定遍历顺序: 
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= t.length; j++) {

      }
    }
  5. 举例推导dp数组: 
*/
const isSubsequence = (s, t) => {
  let dp = Array(s.length + 1)
    .fill(0)
    .map((x) => Array(t.length + 1).fill(0));

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  /* dp[i][j]表示以下标i-1为结尾的字符串s和以下标j-1为结尾的字符串t 相同子序列的长度，
    所以如果dp[s.length][t.length] 与 字符串s的长度相同说明：s与t的最长相同子序列就是s，那么s 就是 t 的子序列。
  */
  return dp[s.length][t.length] === s.length;
};
