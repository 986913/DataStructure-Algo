/*********************** Solution 1: Brute Force ************************/
/**
 * 计算word在sequence中作为子字符串的最大连续重复次数
 * @param {string} sequence - 主字符串
 * @param {string} word - 要查找重复次数的单词
 * @return {number} - word在sequence中连续重复的最大次数
 */

var maxRepeating = function (sequence, word) {
  // 初始化最大重复次数为0
  let maxRepeat = 0;

  // 获取sequence和word的长度
  let sLen = sequence.length;
  let wLen = word.length;

  // 外层循环遍历sequence的每个可能起始位置
  for (let i = 0; i < sequence.length; i++) {
    // 当前起始位置i的连续重复次数
    let curRepeat = 0;

    // 内层while循环检查从当前位置开始，word能连续重复多少次
    while (true) {
      // 计算当前重复次数对应的子字符串起始和结束索引
      let startIdx = i + curRepeat * wLen;
      let endIdx = i + (curRepeat + 1) * wLen;

      // 如果截取的子字符串等于word，说明重复成功，增加重复次数
      if (sequence.substring(startIdx, endIdx) === word) {
        curRepeat++;
      } else {
        // 如果不匹配，跳出循环
        break;
      }
    }

    // 更新全局最大重复次数
    maxRepeat = Math.max(maxRepeat, curRepeat);
  }

  // 返回找到的最大重复次数
  return maxRepeat;
};
