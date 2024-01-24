/**
 * @param {string} s
 * @return {string}
 */
/*********************  Solution: Two pointers 👍 **********************/
var reverseOnlyLetters = function (s) {
  let left = 0;
  let right = s.length - 1;
  let arr = s.split('');

  while (left < right) {
    if (isNotLetter(arr[left])) left++; // skip non-letter
    else if (isNotLetter(arr[right])) right--; // skip non-letter
    else {
      // if both letter, then swap them
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
    }
  }

  return arr.join('');
};

// helper function:
const isNotLetter = (char) => /[^A-Za-z]/.test(char);
