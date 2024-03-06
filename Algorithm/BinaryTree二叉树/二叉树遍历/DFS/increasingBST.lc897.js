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

var increasingBST = function (root) {
  let visited = [];

  const helper = (helperInput) => {
    if (helperInput.left) helper(helperInput.left);
    // update outside visited variable
    visited.push(helperInput.val);
    if (helperInput.right) helper(helperInput.right);
  };
  helper(root);

  let newRoot = new TreeNode();
  let tmp = newRoot;

  for (let i = 0; i < visited.length; i++) {
    tmp.right = new TreeNode(visited[i]);
    tmp = tmp.right;
  }

  return newRoot.right;
};
