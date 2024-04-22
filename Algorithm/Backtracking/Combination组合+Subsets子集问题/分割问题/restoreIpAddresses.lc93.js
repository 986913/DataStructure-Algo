/**
 * @param {string} s
 * @return {string[]}
 */

/**************************** Combination/Subset (输入元素无重不可复选) - LC 131变形题 ******************************/
// 分割问题就是组合问题
var restoreIpAddresses = function (s) {
  let result = [];
  const traversal = (s, curPath, startIdx) => {
    if (curPath.length > 4) return;
    //startIdx === s.length，说明到了叶子层，在叶子层中过滤出长度为4的path
    if (curPath.length === 4 && startIdx === s.length) {
      result.push(curPath.join('.'));
      return;
    }

    //组合combine/子集类subsets是从startidx开始:
    for (let i = startIdx; i < s.length; i++) {
      // 获取s中的子串[startIdx, i]. (substr的第二个参数表示子串的长度，而不是结束索引位置)
      let substring = s.substr(startIdx, i - startIdx + 1);

      // diff is here ---> 添加了s的区间[startIdx, i]是否为valid IP unit 的逻辑：
      if (validIpUnit(substring)) {
        curPath.push(substring);
        traversal(s, curPath, i + 1);
        curPath.pop();
      }
    }
  };

  traversal(s, [], 0);
  return result;
};

/* helper function: valid ip unit is between 0 and 255, and cannot have leading zeros
    validIpUnit('345') --> false 
    validIpUnit('2111') --> false 
    validIpUnit('06') --> false 
    validIpUnit('0') --> true
    validIpUnit('255') --> true 
*/
const validIpUnit = (str) => {
  if (str.length > 3) return false;
  if (Number(str) > 255) return false;
  if (str.length > 1 && str[0] == '0') return false;
  return true;
};
