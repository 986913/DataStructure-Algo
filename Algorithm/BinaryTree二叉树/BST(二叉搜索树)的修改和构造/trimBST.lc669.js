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

var trimBST = function (root, low, high) {
  if (!root) return null;

  //如果root（当前节点）的元素小于low的数值，那么应该递归右子树，并返回右子树符合条件的头结点。
  if (root.val < low) return trimBST(root.right, low, high); // 寻找符合区间[low, high]的节点
  //如果root (当前节点) 的元素大于high的，那么应该递归左子树，并返回左子树符合条件的头结点。
  if (root.val > high) return trimBST(root.left, low, high);

  root.left = trimBST(root.left, low, high); // root->left接入符合条件的左孩子
  root.right = trimBST(root.right, low, high); // root->right接入符合条件的右孩子
  return root;
};
