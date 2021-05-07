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
 * @return {number[]}
 */

var getLonelyNodes = function (root) {
  let lonely = [];

  const helper = (helperInput) => {
    if (helperInput.right === null && helperInput.left) {
      lonely.push(helperInput.left.val);
    }
    if (helperInput.left === null && helperInput.right) {
      lonely.push(helperInput.right.val);
    }

    if (helperInput.left) helper(helperInput.left);
    if (helperInput.right) helper(helperInput.right);
  };
  helper(root);

  return lonely;
};
