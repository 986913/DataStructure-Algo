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
const reveseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]; // es6 way to swap s[left], s[right]

    left++;
    right--;
  }
};
