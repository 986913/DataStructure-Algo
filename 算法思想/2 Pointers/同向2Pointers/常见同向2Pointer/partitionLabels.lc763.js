/**
 * @param {string} s
 * @return {number[]}
 */

/*********************  Solution 👍: Greedy + Two pointer  **********************/
/*
  eg: partitionLabels("ababcbacadefegdehijhklij") --> [9,7,8]
  
  在遍历的过程中相当于是要找每一个字母的边界，如果找到之前遍历过的所有字母的最远边界，说明这个边界就是分割点了。此时前面出现过所有字母，最远也就到这个边界了。
  可以分为如下两步：
    统计每一个字符最后出现的位置
    从头遍历字符，并更新字符的最远出现下标，如果找到字符最远出现位置下标和当前下标相等了，则找到了分割点
  
  https://www.bilibili.com/video/BV18G4y1K7d5/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/

const partitionLabels = (s) => {
  //统计每一个字符最后出现的位置
  let hash = new Map();
  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], i);
  }

  /********* 同向双指针 ***********/
  let result = [];
  let slow = 0;
  let fast = 0;

  for (let i = 0; i < s.length; i++) {
    fast = Math.max(fast, hash.get(s[i])); //找到字符出现的最远边界,并且更新fast下标

    //如果找到字符最远位置 和当前下标 相等了，则就找到了分割点
    if (fast === i) {
      result.push(fast - slow + 1); //更新结果
      slow = fast + 1; // 更新slow
    }
  }

  return result;
};
