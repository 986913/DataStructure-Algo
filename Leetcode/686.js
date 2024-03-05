/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
/********************************* solution： LC459 相关 ************************************/
/**
    case 1: a='ab',   b='abab'
    case 2: a='aaab', b='ba'
  */
var repeatedStringMatch = function (a, b) {
  let repeatTimes = 0;
  let curr = '';

  // case 1:
  while (curr.length < b.length) {
    curr += a;
    repeatTimes += 1;
  }
  if (curr.includes(b)) return repeatTimes;

  // case 2:
  curr += a;
  repeatTimes += 1;
  if (curr.includes(b)) return repeatTimes;

  // b不可能是a的字串了
  return -1;
};
