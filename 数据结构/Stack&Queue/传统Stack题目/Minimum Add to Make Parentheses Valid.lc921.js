/**
 * @param {string} S
 * @return {number}
 */

/********************************* Solution: stack  *******************************/
var minAddToMakeValid = function (s) {
  // stack to keep track of "("
  let stack = [];
  // counter for unmatched ")"
  let unmatchedClosingCount = 0;

  for (let char of s) {
    if (char === '(') {
      stack.push(char);
    } else {
      // If there's no matching opening parenthesis, increment the counter
      if (stack.length === 0) {
        unmatchedClosingCount++;
      } else {
        // pop a matching opening parenthesis from the stack
        stack.pop();
      }
    }
  }

  // unmatched ")" counters and the remaining "(" in the stack
  return unmatchedClosingCount + stack.length;
};
