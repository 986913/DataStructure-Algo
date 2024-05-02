/*************************LC942, 2375 变形题**************************/

/**
 * @param {string} s
 * @return {number[]}
 */
/***********************Solution:1  Stack **************************/
var findPermutation = function (s) {
  let stack = [];
  let res = [];
  for (i = 1; i <= s.length + 1; i++) {
    stack.push(i);
    if (s[i - 1] === 'I') {
      while (stack.length) res.push(stack.pop());
    }
  }
  return res.concat(stack.reverse());
};

/***********************Solution:2  Two Pointer: 没看懂 **************************/
function findPermutation(s) {
  const res = new Array(s.length + 1);
  res[0] = 1;
  let i = 1;

  while (i <= s.length) {
    res[i] = i + 1;
    const j = i;

    if (s[i - 1] === 'D') {
      while (i <= s.length && s[i - 1] === 'D') {
        i++;
      }

      for (let k = j - 1, c = i; k <= i - 1; k++, c--) {
        res[k] = c;
      }
    } else {
      i++;
    }
  }

  return res;
}
