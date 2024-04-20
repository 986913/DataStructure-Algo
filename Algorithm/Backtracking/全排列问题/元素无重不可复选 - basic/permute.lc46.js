/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) *****************************
  时间复杂度为： O(n^2 * n！)  其中n为nums的长度
*/

var permute = function (nums) {
  let result = [];

  const traversal = (arr, curPath) => {
    //说明到了叶子
    if (curPath.length === arr.length) {
      result.push([...curPath]);
      return;
    }

    //前序位置
    //不同点：(排列permute)类问题i从0开始，  (组合类combine)问题是从startidx开始！！
    for (let i = 0; i < arr.length; i++) {
      if (curPath.includes(arr[i])) continue; // 树枝上去重(排除不合法的选择)，跳过已经在路径中的元素

      curPath.push(arr[i]); //在深度上的变量curPath 做选择
      traversal(arr, curPath);
      curPath.pop(); //回溯，在深度上的变量curPath 撤销选择
    }
    //后序位置
  };

  traversal(nums, []);
  return result;
};
