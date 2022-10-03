/**
 * @param {number} n
 * @return {boolean}
 */

//1. hashtable - set

const squareSum = (number) => {
  let sum = 0;

  while (number) {
    let digital = number % 10; //1. 先取number的个位数，       eg:  19 % 10 = 9;
    sum += Math.pow(digital, 2); //2. 算个位数的平方后更新sum   eg:sum = 9^2;
    number = Math.floor(number / 10); //3. 更新sum(去除个位数) eg: 19 --> 1
  }

  return sum;
};

var isHappy = function (n) {
  let sumSet = new Set(); // sumSet用来存每次个位数相加后的结果值

  while (n !== 1 && !sumSet.has(n)) {
    sumSet.add(n);
    n = squareSum(n); //更新输入n
  }

  return n === 1;
};

//2. 2 pointers
const squareSum = (number) => {
  let sum = 0;

  while (number > 0) {
    let digital = number % 10; //1. 先取number的个位数，       eg:  19 % 10 = 9;
    sum += Math.pow(digital, 2); //2. 算个位数的平方后更新sum   eg:sum = 9^2;
    number = Math.floor(number / 10); //3. 更新sum(去除个位数) eg: 19 --> 1
  }
  return sum;
};

var isHappy = function (n) {
  let slow = n;
  let fast = n;

  while (true) {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
};
