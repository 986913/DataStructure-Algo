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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
/******************************** Solution1: DFS Recursion - 👍分解问题思路 *********************************/
var trimBST = function (root, low, high) {
  const helper = (node) => {
    if (!node) return null;
    if (node.val < low) return helper(node.right); //如果root（当前节点）的元素小于low的数值，那么应该递归右子树，并返回右子树符合条件的头结点。
    if (node.val > high) return helper(node.left); //如果root (当前节点) 的元素大于high的，那么应该递归左子树，并返回左子树符合条件的头结点。

    node.left = helper(node.left); // node.left接入符合条件的左孩子
    node.right = helper(node.right); //node.right接入符合条件的右孩子
    return node;
  };
  return helper(root);
};
