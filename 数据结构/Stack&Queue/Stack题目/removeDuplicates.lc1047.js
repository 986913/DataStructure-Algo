/**
 * @param {string} s
 * @return {string}
 * removeDuplicates('abbaca') --> 'ca'
 */
var removeDuplicates = function (s) {
  let stack = [];

  for (let char of s) {
    if (char !== stack[stack.length - 1]) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join('');
};
