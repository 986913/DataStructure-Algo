// First 10 terms of Fibonacci sequence are:
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const fib = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const arr = fib(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
};

const result = fib(10);
console.log(
  `First, ${result.length}, 'terms of Fibonacci sequence are: ${result}`
);
