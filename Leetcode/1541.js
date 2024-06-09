/**
 * @param {string} s
 * @return {number}
 */

/************************ Solution: stack思想 - LC921变形题 *******************************/
var minInsertions = function (s) {
  // stack to keep track of "("
  let stack = [];
  // counter for insertions needed，不仅仅记录插入左括号的数量 还记录了插入右括号的数量
  let insertionsNeeded = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === '(') {
      stack.push(char);
    } else {
      // If there's no matching "(", increment the counter
      if (stack.length === 0) {
        insertionsNeeded++;
      } else {
        // pop a matching "(" from the stack
        stack.pop();
      }

      /*******************  Diff is below ************************/
      // check the next char to determine if an insertion is needed
      if (i + 1 < s.length && s[i + 1] === ')') {
        i++; // skip the next character if ")"
      } else {
        insertionsNeeded++; // need an insertion if the next char is "("
      }
    }
  }

  // because Each remaining "(" needs two closing parentheses
  return insertionsNeeded + stack.length * 2;
};
