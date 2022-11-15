/**
 * @param {string[]} tokens
 * @return {number}
 */

//👍👍👍 use stack:

var evalRPN = function (tokens) {
  var stack = [];
  var right, left;

  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        right = stack.pop();
        left = stack.pop();
        stack.push(left - right); //要左边减右边
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        right = stack.pop();
        left = stack.pop();
        stack.push((left / right) | 0); //要左边除右边
        break;
      default:
        stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};
