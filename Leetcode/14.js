/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    /* 重点在这：使用 while 循环来找到当前字符串与 prefix 的最长公共前缀：
          在 while 循环中，使用字符串的 indexOf 方法来查找当前字符串是否以 prefix 开头。
          如果不是，则将 prefix 的末尾字符删除，然后重新检查。
          这个过程一直持续到当前字符串以 prefix 开头为止。
    */
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      // console.log(prefix)
    }
  }

  return prefix;
};
