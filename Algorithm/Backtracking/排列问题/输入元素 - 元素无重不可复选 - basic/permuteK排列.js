/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC46变形题*****************************/

var permute = function (nums, k) {
  let result = [];
  const traversal = (arr, curPath) => {
    // diff is here:   只收集第K层
    if (curPath.length === k) {
      result.push([...curPath]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (curPath.includes(arr[i])) continue; // 树枝上去重(排除不合法的选择)，跳过已经在路径中的元素

      curPath.push(arr[i]);
      traversal(arr, curPath);
      curPath.pop();
    }
  };

  traversal(nums, []);
  return result;
};
