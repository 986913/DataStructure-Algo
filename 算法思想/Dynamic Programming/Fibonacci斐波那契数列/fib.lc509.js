/**************************  Solution1: 自顶向下 recursion - O(2^n) bad performance ******************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
  n为树的高度(input n)--> O(2^n) * O(1)
*/
var fib = function (n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

/**************************** Solution2: 自顶向下 带备忘录的recursion - O(n)  ***********************
  因为备忘录用空间换时间，时间复杂度降低了很多
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                          O(n) * O(1)
*/
var fib = function (n) {
  let memo = new Array(n + 1).fill(0); //注意备忘录初始化大多是n+1的大小， 因为数组index从0开始
  return helper(memo, n);
};
const helper = (memo, n) => {
  if (n == 0 || n == 1) return n;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[n] != 0) return memo[n];
  // 把递归结果存到备忘录里
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
};

/*************************** Solution3: 自底向上 迭代DP - O(n) ********************************************
  时间复杂度： O(n)
  空间复杂度： O(n)

    1. 确定dp数组以及下标的含义: dp[i]的定义为：第i个数的fib值
    2. 确定递推公式: 状态转移方程 dp[i] = dp[i - 1] + dp[i - 2];
    3. dp数组如何初始化: dp[0]=0, dp[1]=1;
    4. 确定遍历顺序: 从递归公式dp[i] = dp[i - 1] + dp[i - 2] 中可以看出，dp[i]是依赖 dp[i - 1] 和 dp[i - 2]，那么遍历的顺序一定是从前到后遍历的
    5. 举例推导dp数组: 
          按照这个递推公式dp[i] = dp[i - 1] + dp[i - 2]，我们来推导一下，当N为10的时候，dp数组应该是如下的数列：0 1 1 2 3 5 8 13 21 34 55
          如果代码写出来，发现结果不对，就把dp数组打印出来看看和我们推导的数列是不是一致的
 */

var fib = function (n) {
  let dp = new Array(n + 1).fill(0);
  //初始化 base case
  dp[0] = 0;
  dp[1] = 1;

  // 进行状态转移
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // console.log(dp);
  return dp[n];
};

/*************************** Solution4: 自底向上 迭代DP - 优化 ********************************************
  时间复杂度： O(n)
  空间复杂度： O(1)
 */
var fib = function (n) {
  if (n == 0 || n == 1) return n; // base case

  //递归关系
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};
