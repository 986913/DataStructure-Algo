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

//👍👍👍 DFS pre_order recursion: -- dfs_preorder模版变形题 (leetcode 144 , leetcode 257 变形题)
var hasPathSum = function (root, targetSum) {
  if (!root) return 0;

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
