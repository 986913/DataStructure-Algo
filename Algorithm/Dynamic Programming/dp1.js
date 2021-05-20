/* recursion:  O(2^n)    bad-performance */
function fib(n){
  if(n<=2) return 1;
  return fib(n-1) + fib(n-2)
}


/* DP: good performance */
function fib(n, memo = []) {
  if (memo[n]) return memo[n];

  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}

console.log(fib(3));
