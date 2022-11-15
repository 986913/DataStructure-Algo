/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = (s) => {
  let arr = s.split(' ');
  let result = [];

  arr.forEach((word) => result.push(reveseString(word)));
  return result.join(' ');
};

//👍👍👍reverseString by using 2 pointer
const reveseString = (str) => {
  let left = 0;
  let right = str.length - 1;
  let arr = str.split('');

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
};
