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

    //前序位置：点

    /* 不同点：
    (排列permute)类问题i从0开始:                  --> i从   0    开始就是为了要result组合重复,因为order matters.      eg: ✅[1,2,3], ✅[3,2,1] etc
    (组合combine/子集类subsets)是从startidx开始！ --> i从startIdx开始就是为了防止result组合重复,因为order not matters. eg: ✅[1,2,3], ❌[3,2,1] etc
    */
    for (let i = 0; i < arr.length; i++) {
      if (curPath.includes(arr[i])) continue; // 树枝上去重(排除不合法的选择)，跳过已经在路径中的元素

      curPath.push(arr[i]); //在树枝上做选择 curPath
      traversal(arr, curPath);
      curPath.pop(); //回溯，在树枝上撤销选择 curPath
    }

    //后序位置： 点
  };

  traversal(nums, []);
  return result;
};
