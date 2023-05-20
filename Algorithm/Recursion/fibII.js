// First 10 terms of Fibonacci sequence are:
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const fib = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const arr = fib(n - 1); //生成包含前n-1项的斐波那契数列，将其赋值给变量arr。
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]); //每次递归调用中的这行代码都会根据之前生成的斐波那契数列的最后两项，计算并添加新的项到数组中，从而递归生成完整的斐波那契数列

  return arr;
};

const result = fib(10);
console.log(
  `First, ${result.length}, 'terms of Fibonacci sequence are: ${result}`
);

/**
  当输入参数为5时，我们来逐步分析递归的每一步及数组arr的变化。
  初始调用：fib(5)：

  n 不等于 0 和 1，执行递归调用 fib(4)：
    内部递归调用 fib(3)：
      内部递归调用 fib(2)：
        内部递归调用 fib(1)：
          返回数组 [0, 1]
        arr 变为 [0, 1]
        添加新项：1 + 0 = 1，arr 变为 [0, 1, 1]
        返回数组 [0, 1, 1]
      arr 变为 [0, 1, 1]
      添加新项：1 + 1 = 2，arr 变为 [0, 1, 1, 2]
      返回数组 [0, 1, 1, 2]
    arr 变为 [0, 1, 1, 2]
    添加新项：2 + 1 = 3，arr 变为 [0, 1, 1, 2, 3]
    返回数组 [0, 1, 1, 2, 3]
  arr 变为 [0, 1, 1, 2, 3]
  添加新项：3 + 2 = 5，arr 变为 [0, 1, 1, 2, 3, 5]
  返回数组 [0, 1, 1, 2, 3, 5]
 */
