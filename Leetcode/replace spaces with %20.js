var replaceSpace = function (s) {
  const arr = s.split('').map((char) => {
    if (char === ' ') return '%20';
    return char;
  });
  return arr.join('');
};

//2 pointer, 不使用额外空间
var replaceSpace = function (s) {
  // 字符串转为数组
  const strArr = s.split('');
  let count = 0;

  // 计算空格数量
  for (let char of strArr) {
    if (char === ' ') count++;
  }

  let left = strArr.length - 1;
  let right = strArr.length + count * 2 - 1;
  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }

  // 数组转字符串
  return strArr.join('');
};
