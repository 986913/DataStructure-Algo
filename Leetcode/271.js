/*********************************** Solution: String.fromCharCode() *********************************************

  String.fromCharCode()被用来创建特殊字符、符号或者不常见的字母，比如带有重音符号或其他变音符号的字母。
  只需要知道这个字符对应的Unicode编码，就可以用String.fromCharCode()来生成它
*/

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  return strs.join(String.fromCharCode(257));
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  return s.split(String.fromCharCode(257));
};
