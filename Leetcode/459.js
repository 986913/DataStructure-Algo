// solution 1: 移动匹配: 判断字符串s是否有重复子串组成，只要两个s拼接在一起，里面还出现一个s的话，就说明是有重复子串组成。
var repeatedSubstringPattern = function (s) {
  const repeated = s.repeat(2); // repeat s
  const newstr = repeated.slice(1, -1); //  去除掉首尾char, 这样避免在s+s中搜索出原来的s，我们要搜索的是中间拼接出来的s。
  return newstr.includes(s);
};
