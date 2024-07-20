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
 * @return {number}
 */
/************************************* DFS 分解思想 ******************************************/
var maxPathSum = function (root) {
  let maxSum = -Infinity;

  const helper = (node) => {
    if (!node) return 0;

    const leftPathSum = Math.max(0, helper(node.left));
    const righPathSum = Math.max(0, helper(node.right));
    //后序位置: 当前节点为根的最大路径和，包括当前节点值加上左右子树的路径和
    const currentPathSum = node.val + leftPathSum + righPathSum;
    maxSum = Math.max(maxSum, currentPathSum); // 更新全局变量maxSum
    return node.val + Math.max(leftPathSum, righPathSum); //返回当前节点的最大pathSum
  };

  helper(root);
  return maxSum;
};
