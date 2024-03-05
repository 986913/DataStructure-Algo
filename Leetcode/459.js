/**
 * @param {string} s
 * @return {boolean}
 */

/********************************* solution 1: 移动匹配: LC 686相关 ************************************/
// 判断字符串s是否有重复子串组成，只要两个s拼接在一起，去掉头尾, 里面还出现一个s的话，就说明是有重复子串组成
var repeatedSubstringPattern = function (s) {
  const repeated = s.repeat(2); // repeat s
  const newstr = repeated.slice(1, -1); //  去除掉首尾char, 这样避免在s+s中搜索出原来的s，我们要搜索的是中间拼接出来的s。
  return newstr.includes(s);
};

/********************************* solution 2： LC 686相关 ************************************/
// https://www.jiakaobo.com/leetcode/459.%20Repeated%20Substring%20Pattern.html
var repeatedSubstringPattern = function (s) {
  let len = s.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    if (len % i === 0) {
      let repeatTimes = len / i;
      let str = s.substring(0, i);
      let constrcutedStr = str.repeat(repeatTimes);

      if (constrcutedStr === s) return true;
    }
  }

  return false;
};
