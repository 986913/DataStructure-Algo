/**
 * @param {string} s
 * @return {boolean}
 */

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
      default:
        if (char !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]')); //true
console.log(isValid('([{])}')); //false
