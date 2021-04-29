/**
 * @param {string} S
 * @return {string}
 */

var removeDuplicates = function (S) {
  const stacks = [];

  for (let i = 0; i < S.length; i++) {
    if (!stacks || (stacks[stacks.length - 1] !== S[i])) {
      stacks.push(S[i]);
    } else {
      stacks.pop();
    }
  }

  return stacks.join("");
};
