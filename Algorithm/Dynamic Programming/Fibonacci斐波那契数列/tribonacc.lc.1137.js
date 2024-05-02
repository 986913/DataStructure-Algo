// LC 509变形题

/**************************  Solution1: 自顶向下 recursion - O(3^n) bad performance ******************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
  n为树的高度(input n)--> O(3^n) * O(1)
*/
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

/**************************** Solution2: 自顶向下 带备忘录的recursion - O(n)  ***********************
  因为备忘录用空间换时间，时间复杂度降低了很多
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                          O(n) * O(1)
*/
var tribonacci = function (n) {
  let memo = new Array(n + 1).fill(0); //注意初始化大多是n+1的大小， 因为数组index从0开始
  return helper(memo, n);
};

const helper = (memo, n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[n] !== 0) return memo[n];
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2) + helper(memo, n - 3);
  return memo[n];
};

/*************************** Solution3: 自底向上 迭代DP ********************************************/
var tribonacci = function (n) {
  let dp = new Array(n + 1).fill(0); //注意初始化大多是n+1的大小， 因为数组index从0开始
  //初始化 base case
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  // 进行状态转移
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  // console.log(dp);
  return dp[n];
};
