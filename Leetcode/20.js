/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0) {
      let top = stack[stack.length - 1];
      switch (top) {
        case "(":
          if (s[i] === ")") stack.pop();
          else stack.push(s[i]);
          break;
        case "[":
          if (s[i] === "]") stack.pop();
          else stack.push(s[i]);
          break;
        case "{":
          if (s[i] === "}") stack.pop();
          else stack.push(s[i]);
          break;
      }
    } 
    else {
      stack.push(s[i])
    }
  }
  
  return stack.length === 0;
};
