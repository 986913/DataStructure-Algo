/* use 2 Pointers solution for Palindrome */

/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) => {
  const regex = /[^A-Za-z0-9]/g;
  const modifiedStr = s.replace(regex, '').toLowerCase();

  let left = 0;
  let right = modifiedStr.length - 1;

  while (left <= right) {
    // console.log(modifiedStr[left], modifiedStr[right])
    if (modifiedStr[left] !== modifiedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
