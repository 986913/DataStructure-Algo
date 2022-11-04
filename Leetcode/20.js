/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let char of s) {
    if (stack.length === 0) {
      stack.push(char);
    } else {
      const top = stack[stack.length - 1];
      switch (top) {
        case '(':
          if (char == ')') stack.pop();
          else stack.push(char);
          break;
        case '[':
          if (char == ']') stack.pop();
          else stack.push(char);

          break;
        case '{':
          if (char == '}') stack.pop();
          else stack.push(char);
          break;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]')); //true
console.log(isValid('([{])}')); //false
