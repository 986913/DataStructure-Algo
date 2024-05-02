/**
 * 这道题就靠死记硬背了
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
 */

/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  //因为题目给定的num范围是[1，3999]；
  let qian = ['', 'M', 'MM', 'MMM']; // '', 1000, 2000, 3000

  // '', 100, 200, 300, 400, 500, 600, 700, 800, 900
  let bai = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

  // '', 10, 20, 30, 40, 50, 60, 70, 80, 90
  let shi = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];

  // '', 1, 2, 3, 4, 5, 6, 7, 8, 9
  let ge = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  const qianwei = qian[Math.trunc(num / 1000)] || '';
  const baiwei = bai[Math.trunc((num / 100) % 10)] || '';
  const shiwei = shi[Math.trunc((num / 10) % 10)] || '';
  const gewei = ge[num % 10];

  // qian[千位] + bai[百位] + shi[十位] + ge[个位]
  return qianwei + baiwei + shiwei + gewei;
};
