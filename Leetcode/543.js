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
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const helper = (helperInput) => {
    if (!helperInput) return 0;

    let left = helper(helperInput.left);
    let right = helper(helperInput.right);

    // changed outside varabes
    diameter = Math.max(diameter, left + right);
    
    return 1 + Math.max(left, right);
  };

  helper(root);
  return diameter;
};
