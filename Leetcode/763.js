/**
 * @param {string} s
 * @return {number[]}
 */

/**
  在遍历的过程中相当于是要找每一个字母的边界，如果找到之前遍历过的所有字母的最远边界，说明这个边界就是分割点了。此时前面出现过所有字母，最远也就到这个边界了。

  可以分为如下两步：
  统计每一个字符最后出现的位置
  从头遍历字符，并更新字符的最远出现下标，如果找到字符最远出现位置下标和当前下标相等了，则找到了分割点
*/

var partitionLabels = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }

  let result = [];
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]]);
    if (right === i) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }

  return result;
};

//partitionLabels("ababcbacadefegdehijhklij") --> [9,7,8]
