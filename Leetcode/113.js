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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, targetSum) {
  if (!root) return [];

  let paths = [];

  // recursion params:  node, count, curPath, no return value
  const helper = (node, count, curPath) => {
    if (!node.left && !node.right && count === 0) {
      curPath = [...curPath, node.val];
      paths.push(curPath);
    }

    curPath = [...curPath, node.val];
    if (node.left) helper(node.left, count - node.left.val, curPath);
    if (node.right) helper(node.right, count - node.right.val, curPath);
  };

  helper(root, targetSum - root.val, []);
  return paths;
};
