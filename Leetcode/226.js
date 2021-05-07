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

var invertTree = function (root) {
  const helper = (helperInput) => {
    if (helperInput === null) return;

    [helperInput.left, helperInput.right] = [ helperInput.left, helperInput.right];

    if (helperInput.left) helper(helperInput.left);
    if (helperInput.right) helper(helperInput.right);
  };
  helper(root);
  
  return root;
};
