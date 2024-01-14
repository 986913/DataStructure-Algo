/************************* Solution 1: use API ***********************/
/*
 * @param {string}
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  let trimed = s.trim().split(' ');
  return trimed[trimed.length - 1].length;
};

/************************* Solution 2: two pointer *******************************/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //第1次遍历从尾到头, 掠过空格,直到碰到字母
  let end = s.length - 1;
  while (end >= 0 && s[end] == ' ') end--;

  //开一个新的指针start
  let start = end;
  //第2次遍历从end到头, 掠过字母，直到碰到空格
  while (start >= 0 && s[start] != ' ') start--;

  //最后返回长度
  return end - start;
};
// https://leetcode.cn/problems/length-of-last-word/?envType=study-plan-v2&envId=programming-skills
