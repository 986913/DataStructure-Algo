/**
 * @param {string} s
 * @return {boolean}
 */

/* --------------------- Solution: Two Pointers --------------------- */
const isPalindrome = (s) => {
  const regex = /[^A-Za-z0-9]/g; //除过A-Z a-z 0-9的所有字符。   [^...] 表示一个字符类，匹配其中任意一个字符。
  const modifiedStr = s.replace(regex, '').toLowerCase();

  let left = 0;
  let right = modifiedStr.length - 1;
  while (left < right) {
    if (modifiedStr[left] !== modifiedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
