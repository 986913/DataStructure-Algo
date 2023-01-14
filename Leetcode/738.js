/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  n = n
    .toString()
    .split('')
    .map((item) => parseInt(item));
  // console.log(n) --> [1,0];

  let flag = Infinity; // flag用来标记赋值9从哪里开始. 设置为这个默认值，为了防止第二个for循环在flag没有被赋值的情况下执行
  for (let i = n.length - 1; i > 0; i--) {
    if (n[i - 1] > n[i]) {
      flag = i; //flag用来标记赋值9从哪里开始
      n[i - 1] = n[i - 1] - 1;
      // n[i]=9
    }
  }

  for (let i = flag; i < n.length; i++) {
    n[i] = 9;
  }

  return parseInt(n.join(''));
};

/*
  monotoneIncreasingDigits(332) --> 299
  monotoneIncreasingDigits(10) --> 9
  monotoneIncreasingDigits(297) --> 289
*/
