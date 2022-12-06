/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/* 使用recursuib的方法, 需要从下到上，所以使用post order: */
var lowestCommonAncestor = function (root, p, q) {
  // 1.使用递归的方法, 需要从下到上，所以使用post order
  const travelTree = function (node, p, q) {
    // 2. 确定递归终止条件
    if (!node) return null;
    if (node === p || node === q) return node; // find the p or q node!

    // 3. 确定递归单层逻辑
    let left = travelTree(node.left, p, q);
    let right = travelTree(node.right, p, q);
    if (left && right) return root;
    if (!left) return right;
    return left;
  };
  return travelTree(root, p, q);
};
