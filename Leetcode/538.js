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
 * @return {TreeNode}
 */

var convertBST = function (root) {
  let pre = null;

  const helper = (node) => {
    if (!node) return;

    if (node.right) helper(node.right); // 右
    if (pre) node.val += pre.val; //中
    pre = node;
    if (node.left) helper(node.left); // 左
  };

  helper(root);
  return root;
};
