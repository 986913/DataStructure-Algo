//solution 1:  directly use .slice
var reverseLeftWords = function (s, n) {
  const length = s.length;

  let i = 0;
  while (i <= n) {
    s += s[i]; // console.log(s)
    i++;
  }

  return s.slice(n, length + n);
};

// solution 2:  2 pointers

// utils
function reverseWords(strArr, left, right) {
  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];

    left++;
    right--;
  }
}
var reverseLeftWords = function (s, n) {
  let strArr = s.split('');
  let length = strArr.length;

  // 反转区间为前n的子串
  reverseWords(strArr, 0, n - 1);
  // 反转区间为n到末尾的子串
  reverseWords(strArr, n, length - 1);
  // 反转整个字符串
  reverseWords(strArr, 0, length - 1);

  return strArr.join('');
};
