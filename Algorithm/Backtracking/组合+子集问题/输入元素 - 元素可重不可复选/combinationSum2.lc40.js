/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/****************************  Backtracking (ie:多叉树遍历框架) LC90变形题 ******************************/
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b); //<--- diff is here
  let result = [];

  const traversal = (arr, curPath, curSum, startIdx) => {
    //达到目标和，找到符合条件的组合
    if (curSum === target) {
      result.push([...curPath]);
      return;
    }
    //超过目标和，直接结束
    if (curSum > target) {
      return;
    }

    for (let i = startIdx; i < arr.length; i++) {
      if (i > startIdx && arr[i] === arr[i - 1]) continue; // 剪枝： 值相同的相邻树枝，只遍历第一条

      curPath.push(arr[i]);
      curSum += arr[i];
      traversal(arr, curPath, curSum, i + 1); //传入的i+1, 表示不可以重复读取当前的数
      curPath.pop();
      curSum -= arr[i];
    }
  };

  traversal(candidates, [], 0, 0); //<--- diff is here，多了一个curSum参数
  return result;
};
