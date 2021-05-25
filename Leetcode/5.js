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

/* Soulution2: DP */
/* 
  维护一个dp维数组,  dp[i][j]的i,j代表string的index, dp[i][j]存的是true/false,代表是不是palindrome
  https://leetcode.com/problems/longest-palindromic-substring/discuss/1167311/JavaScript-solution-Dynamic-Programming-Time-O(n2)-Space-O(n2)-with-Explanation 
*/

var longestPalindrome = function (s) {
  let palindrome;

  // 2D Array
  dp = Array(s.length)
    .fill(0)
    .map(() => Array(s.length).fill(false));

  // Handle One Character.
  for (let row = 0; row < s.length; row++) {
    for (let column = row; column < s.length; column++) {
      // console.log(`{s[row]})
      if (row === column) {
        dp[row][column] = true;
        palindrome = s[row];
      }
    }
  }

  // Handle Two Characters
  for (let r = 0; r < s.length - 1; r++) {
    for (let c = r + 1; c > r; c--) {
      //    console.log(`${s[r]}${s[c]}`)
      if (s[r] === s[c]) {
        dp[r][c] = true;
        palindrome = s.substring(r, c + 1);
      }
    }
  }

  // Handle Three or more Characteres. This is the real part of the algorithm.
  for (let c = 2; c < s.length; c++) {
    for (let r = 0; r + c < s.length; r++) {
      let wordLength = r + c;
      // console.log(`${s.substring(r, wordLength+1)}`)
      if (s[r] === s[wordLength] && dp[r + 1][wordLength - 1]) {
        dp[r][wordLength] = true;
        let newPalindrome = s.substring(r, wordLength + 1);
        if (newPalindrome.length > palindrome.length) {
          palindrome = newPalindrome;
        }
      }
    }
  }
  return palindrome;
};
