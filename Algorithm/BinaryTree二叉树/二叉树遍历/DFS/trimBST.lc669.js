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
/******************************** Solution1: 👍👍 DFS（分解思想）+ BST特性  LC450变形题 *********************************
  这道题删除node时候之所以没有像LC450那样分情况讨论删除，就是因为这个树是BST. 要利用BST的特性
 */
var trimBST = function (root, low, high) {
  if (!root) return null;

  //! Diff is here: 返回trimBST(...) 而不是root.left or root.right:
  if (root.val < low) return trimBST(root.right, low, high); //如果当前节点的元素小于low的数值，那么应该 删除左子树 递归右子树，并返回右子树符合条件的头结点。
  if (root.val > high) return trimBST(root.left, low, high); //如果当前节点的元素大于high的，那么应该 删除右子树 递归左子树，并返回左子树符合条件的头结点。

  root.left = trimBST(root.left, low, high); // root.left接入符合条件的左孩子
  root.right = trimBST(root.right, low, high); //root.right接入符合条件的右孩子
  return root;
};
