/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/* ------------------------ Solution 1:  backtracking --------------------------- */
const wordBreak = (s, wordDict) => {
  const set = new Set();
  const result = [];

  const traversal = (curStr, curPath) => {
    if (set.has(curStr)) return;
    if (!s.startsWith(curStr) || curStr.length > s.length) return;
    if (s === curStr) {
      result.push(curPath.join(' '));
      return;
    }

    set.add(curStr);
    for (let i = 0; i < wordDict.length; i++) {
      curPath.push(wordDict[i]);
      traversal(curStr + wordDict[i], curPath);
      curPath.pop();
    }
  };

  traversal('', []);
  return result;
};

/* ------------------------ solution 2:  DP 完全背包  --------------------------- */

/**
1. 确定dp数组以及下标的含义:  dp[i] : 字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。
2. 确定递推公式: 
    如果确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true。（j < i ）。
    所以递推公式是 if([j, i] 这个区间的子串出现在字典里 && dp[j]是true) 那么 dp[i] = true。 
3. dp数组如何初始化: dp[0]=true, 下标非0的dp[i]初始化为false，
4. 确定遍历顺序:
    题目中说是拆分为一个或多个在字典中出现的单词，所以这是完全背包。还要讨论两层for循环的前后顺序。
    如果求组合数就是外层for循环遍历物品，内层for遍历背包。
    如果求排列数就是外层for遍历背包，内层for循环遍历物品。
    而本题其实我们求的是排列数
5. 举例推导dp数组: 
    以s = "leetcode", wordDict = ["leet", "code"]为例
    dp[i] = [1,0,0,0,1,0,0,0,1]
 */

function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  //先遍历背包
  for (let i = 1; i <= s.length; i++) {
    //后遍历物品
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (wordDict.includes(word) && dp[j] === true) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
