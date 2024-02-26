/**
 * @param {number} n
 * @return {boolean}
 */

/************************************ 👍👍👍 hashtable - Set ************************************************/
/* 这道题目使用hashtbale，来判断这个sum是否重复出现:
    如果求和的过程中， set中重复出现sum, 那就是无限循环, 那就不是happy number, return false
    否则一直找到sum等于1为止 
*/

var isHappy = function (n) {
  let sumSet = new Set();

  while (true) {
    if (sumSet.has(n)) return false; //sum重复值出现，有无线循环，不是快乐数
    if (n === 1) return true; // 当n最后变成1， 是快乐数

    sumSet.add(n); // update sumSet
    n = squareSum(n); //update n with its each digitals sum
  }
};

// helper function:
const squareSum = (number) => {
  let sum = 0;
  while (number) {
    let digital = number % 10; //1. 先取number的个位数，       eg:  19 % 10 = 9;
    sum += Math.pow(digital, 2); //2. 算个位数的平方后更新sum   eg:sum = 9^2;
    number = Math.floor(number / 10); //3. 更新number(去除个位数) eg: 19 --> 1
  }
  return sum;
};

/************************************  2 pointer  ************************************************/
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

// helper function:
const squareSum = (number) => {
  let sum = 0;
  while (number) {
    let digital = number % 10; //1. 先取number的个位数，       eg:  19 % 10 = 9;
    sum += Math.pow(digital, 2); //2. 算个位数的平方后更新sum   eg:sum = 9^2;
    number = Math.floor(number / 10); //3. 更新number(去除个位数) eg: 19 --> 1
  }
  return sum;
};
