/* -------------------- solution1: recursion:  O(2^n) bad-performance -------------------- */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

/* -------------------- solution2:  DP: good performance  ------------------  */
const fib = (n) => {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp);
  return dp[n];
};
