/* --------------------- Solution: Two Pointers --------------------- */
/**
 * @param {string} s
 * @return {boolean}
 */

const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // console.log(s[left + 1], s[right]);
      // console.log(s[left], s[right - 1]);
      // 重点在这：
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};

// helper function:
const isPalindrome = (s) => {
  const regex = /[^A-Za-z0-9]/g; //除过A-Z a-z 0-9的所有字符。   [^...] 表示一个字符类，匹配其中任意一个字符。
  const modifiedStr = s.replace(regex, '').toLowerCase();

  while (left < right) {
    if (modifiedStr[left] !== modifiedStr[right]) return false;

    left++;
    right--;
  }

  return true;
};
