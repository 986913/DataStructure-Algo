/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const swap = (str, a, b) => {
  let tmp = str[a];
  str[a] = str[b];
  str[b] = tmp;
};

/*2 pointers */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    swap(s, left, right);
    left++;
    right--;
  }

  return s;
};

/* Recurrsion + 2 pointers*/
var reverseString = function (s) {
  helper(0, s.length - 1, s);
};

const helper = (start, end, str) => {
  if (start > end) return;
  swap(str, start, end);
  helper(start + 1, end - 1, str);
};

const swap = (str, a, b) => {
  let tmp = str[a];
  str[a] = str[b];
  str[b] = tmp;
};
