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
 * @param {number} target
 * @return {TreeNode}
 */
/* ************************ Solution: 👍 DFS PostOrder 分解思想  *************************/
var removeLeafNodes = function (root, target) {
  if (root === null) return null;

  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  //后序位置：
  // 当root为叶子节点时 且值等于target
  if (!root.left && !root.right && root.val === target) return null; // delete node here
  return root;
};
