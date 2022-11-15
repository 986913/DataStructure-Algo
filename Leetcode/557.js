/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  let arr = s.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const reversed = reveseString(arr[i]);
    result.push(reversed);
  }

  return result.join(' ');
};

//👍👍👍 reverseString by using 2 pointer
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
