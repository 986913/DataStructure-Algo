/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

// force brute:
var isAlienSorted = function (words, order) {
  let map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  function compareChar(a, b) {
    return map.get(a) - map.get(b);
  }

  function compareWord(A, B) {
    let i = 0;
    let j = 0;

    while (i < A.length && j < B.length) {
      if (compareChar(A[i], B[j]) > 0) {
        return 1;
      } else if (compareChar(A[i], B[j]) < 0) {
        return -1;
      }
      i += 1;
      j += 1;
    }

    if (i === A.length) {
      return j === B.length ? 0 : -1;
    } else {
      return 1;
    }

  }

  for (let i = 1; i < words.length; i++) {
    if (compareWord(words[i - 1], words[i]) > 0) 
      return false;
  }
  return true;

};
