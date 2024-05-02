/*************************LC484, 2375变形题**************************/

/**
 * @param {string} s
 * @return {number[]}
 */
/***********************Solution: Two Pointer / Greedy **************************/
var diStringMatch = function (s) {
  let left = 0;
  let right = s.length;

  let result = new Array(s.length + 1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      result[i] = left;
      left++;
    } else {
      result[i] = right;
      right--;
    }
  }

  result[s.length] = left;

  return result;
};
