/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/******************** 解法:👍👍👍  2Pointer ********************/

var reverseWords = function (s) {
  //1st reverse:
  reverse(s, 0, s.length - 1);

  let left = 0;
  let right = 0;
  while (right <= s.length) {
    // 注意处理最后一个(right===s.length)
    if (right === s.length || s[right] === ' ') {
      //2nd reverse:
      reverse(s, left, right - 1);
      left = right + 1; // updat left
    }
    right++;
  }
};
// helper function:
const reverse = (arr, left, right) => {
  while (left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};
