/**
 * @param {number} n
 * @return {string[]}
  一个有效的括号序列是这样的：
    左括号和右括号的数量相等。
    从左到右遍历括号序列，任何时刻左括号的数量都多于右括号的数量。也就是说，在任何位置，右括号的数量都不会超过左括号的数量。
 */

/****************************  Backtracking (ie:多叉树遍历框架)  ******************************/
var generateParenthesis = function (n) {
  let result = [];

  // left,right 代表对应 左括号,右括号对应还剩几个
  function traversal(curStr, left, right) {
    if (right < left) return; // 若剩下的左括号多（即右括号多），说明不合法
    if (left < 0 || right < 0) return; // 数量小于 0 肯定是不合法的
    //剩下的左右括号都为0，说成匹配好了
    if (left === 0 && right === 0) {
      result.push(curStr);
      return;
    }

    curStr += '(';
    traversal(curStr, left - 1, right);
    curStr = curStr.slice(0, -1);

    curStr += ')';
    traversal(curStr, left, right - 1);
    curStr = curStr.slice(0, -1);
  }

  traversal('', n, n);
  return result;
};
