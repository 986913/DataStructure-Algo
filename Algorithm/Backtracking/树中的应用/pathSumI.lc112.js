/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// https://www.bilibili.com/video/BV19t4y1L7CR/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
/* ------ Solution1: 👍👍👍 DFS + backtracking-----------------------------------------------------------*/
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  //1. 确定递归函数 函数参数:树的根节点,和 count, 返回值boolean
  const helper = (node, count) => {
    //2. 确定终止条件，到叶子节点就终止.
    if (!node.left && !node.right && count === 0) return true; // 遇到叶子节点，并且计数为0. 说明找到了目标和 直接返回true
    if (!node.left && !node.right && count !== 0) return false; // 遇到叶子节点而没有找到合适的边(计数不为0). 说明没找到目标和 直接返回false

    //3. 确定单层递归逻辑
    if (node.left) {
      count -= node.left.val;
      if (helper(node.left, count)) return true; //递归函数是有返回值的，如果递归函数返回true，说明找到了合适的路径，应该立刻返回
      count += node.left.val; //backtracking !
    }
    if (node.right) {
      count -= node.right.val;
      if (helper(node.right, count)) return true; //递归函数是有返回值的，如果递归函数返回true，说明找到了合适的路径，应该立刻返回
      count += node.right.val; //backtracking !
    }

    return false;
  };

  return helper(root, targetSum - root.val);
};

/* ---------  Solution2: 👍👍 DFS pre_order模版变形题 (leetcode 257🟡变形题) -----------------------------*/
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let allPathSums = [];

  //1. 确定递归函数 函数参数:树的根节点 和 当前的每一条path上所有节点的总和: currPathSum, 无返回值
  const getEachPathSum = (node, currPathSum) => {
    //2. 确定终止条件，到叶子节点就终止. 更新currPathSum, allPathSums
    if (!node.left && !node.right) {
      currPathSum += node.val;
      allPathSums.push(currPathSum);
      return;
    }

    //3. 确定单层递归逻辑
    currPathSum += node.val;
    if (node.left) getEachPathSum(node.left, currPathSum);
    if (node.right) getEachPathSum(node.right, currPathSum);
  };

  getEachPathSum(root, 0);
  return allPathSums.includes(targetSum);
};
