//solution 1:  directly use .slice
var reverseLeftWords = function (s, n) {
  const length = s.length;
  while (n) {
    s = s[length - 1] + s; // console.log(s)
    n--;
  }
  return s.slice(0, length);
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
