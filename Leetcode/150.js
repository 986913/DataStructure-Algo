/**
 * @param {string[]} tokens
 * @return {number}
 */

//👍👍👍 use stack:

var evalRPN = function (tokens) {
  let stack = [];
  let right, left;

  for (let char of tokens) {
    switch (char) {
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
      default: // when char is number sting, so convert to number and pushed into stack
        stack.push(parseInt(char));
    }
  }

  return stack[0];
};
