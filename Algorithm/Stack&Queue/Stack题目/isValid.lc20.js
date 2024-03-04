/**
 * @param {string} s
 * @return {boolean}
   isValid('()[]');    // true
   isValid('([{])}');  // false
 */

/* --------------------------- 👍👍👍:  use stack ------------------ */
var isValid = function (s) {
  let stack = [];

  for (let char of s) {
    // 碰到左括号，给栈放右括号
    switch (char) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      //碰到s中的右括号时，如果不匹配stack pop元素 则就不匹配, 直接返回false
      default:
        if (char !== stack.pop()) return false;
    }
  }

  return stack.length === 0; //stack中要有对于元素的话，说明s中有多余的左括号或者右括号
};
