/**
 * @param {string} s
 * @return {string}
 */

/* Soultion1:  自己写的暴力法。 时间耗时太长 不推荐用 */
var longestPalindrome = function (s) {
  const isPalindromic = (str) => str === str.split("").reverse().join("");

  let palindromicArr = []; //holds all palindromic combo

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      let subStr = s.slice(i, j);
      if (isPalindromic(subStr) && subStr !== "") {
        palindromicArr.push(subStr);
      }
    }
  }

  // return most longest one of palindromicArr
  let maxLen = 0;
  let result = "";
  palindromicArr.forEach((item) => {
    if (item.length > maxLen) {
      maxLen = item.length;
      result = item;
    }
  });
  return result;
};
