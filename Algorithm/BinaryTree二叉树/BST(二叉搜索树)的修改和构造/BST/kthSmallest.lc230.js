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
 * @param {number} k
 * @return {number}
 */
/*************************** DFS: In order ***************************/
var kthSmallest = function (root, k) {
  const visited = [];
  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    visited.push(node.val);
    if (node.right) helper(node.right);
  };
  helper(root);

  return visited[k - 1]; // k-1 is because k is 1-indexed
};
