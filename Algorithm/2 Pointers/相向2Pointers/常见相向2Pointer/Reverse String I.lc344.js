/**
 * @param {string} s
 * @return {string}
 */

/*******************************  👍👍👍 2 pointer *************************************/
const reveseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]; // es6 way to swap s[left], s[right]

    left++;
    right--;
  }
};
