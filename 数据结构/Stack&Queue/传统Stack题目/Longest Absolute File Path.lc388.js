/**
 * @param {string} input
 * @return {number}
 */

/*******************************  Solution: Stack *******************************************/
var lengthLongestPath = function (input) {
  let stack = []; // 保存每一层路径的长度(number)
  let maxLen = 0;

  let arr = input.split('\n'); // 将input按行拆分，每一行代表一个文件或目录
  for (let part of arr) {
    // 计算当前part的深度: 每part前面的制表符（\t）数量表示当前文件/目录的深度
    let level = part.lastIndexOf('\t') + 1;

    // 让栈中只保留当前目录的父路径
    while (level < stack.length) {
      stack.pop();
    }

    //计算当前路径的长度 = （当前part的长度 - "/t" 的数量）+ 父路径长度 + 1(斜杠数量）
    let currentLen = part.length - level; //  "\t".length === 1   ---> 制表符\t的长度在字符串中通常被视为一个字符，而不是两个字符
    if (stack.length > 0) {
      currentLen += stack[stack.length - 1] + 1; // 加上父路径和斜杠
    }
    stack.push(currentLen); //得出当前路径的长度后，更新stack

    //如果当前part是文件，就更新maxLen：
    if (part.includes('.')) maxLen = Math.max(maxLen, currentLen);
  }

  // console.log(stack)
  return maxLen;
};
