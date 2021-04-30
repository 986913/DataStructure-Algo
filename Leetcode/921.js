/**
 * @param {string} S
 * @return {number}
 */

var minAddToMakeValid = function (S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      switch (top) {
        case "(":
          if (S[i] === ")") stack.pop();
          else stack.push(S[i]);
          break;
        case "[":
          if (S[i] === "]") stack.pop();
          else stack.push(S[i]);
          break;
        case "{":
          if (S[i] === "}") stack.pop();
          else stack.push(S[i]);
          break;
        default:
          stack.push(S[i]);
      }
    } else {
      stack.push(S[i])
    };
  }

  return stack.length;
};
