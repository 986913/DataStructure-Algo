/**
 * @param {string} s
 * @return {string}
 */
//解法1:👎 直接使用array build in method
var reverseWords = function (s) {
  let arr = s
    .trim()
    .split(' ')
    .filter((ele) => ele !== '');
  return arr.reverse().join(' ');
};

//解法2:👍  2Pointer:
var reverseWords = function (s) {
  const arr = s.trim().split(/ +/);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join(' ');
};
