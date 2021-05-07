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

// solution 1: DFS
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



// solution 2: BFS
var invertTree = function (root) {
  let queue = [];
  let node = root;

  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    if (node === null) return null; // corner case

    [node.right, node.left] = [node.left, node.right];

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};
