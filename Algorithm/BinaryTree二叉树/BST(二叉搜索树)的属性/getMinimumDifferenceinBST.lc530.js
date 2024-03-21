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

//------------------👍 Solution 1: bst dfs inorder to create visited array, then find the Minimum Diff of that array 🟡lc98变形题------------
var getMinimumDifference = function (root) {
  const visited = [];

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    visited.push(node.val);
    if (node.right) helper(node.right);
  };

  helper(root);

  let minAbsDiff = Infinity;
  for (let i = 0; i < visited.length; i++) {
    const diff = Math.abs(visited[i] - visited[i + 1]);
    if (diff < minAbsDiff) {
      minAbsDiff = diff;
    }
  }

  return minAbsDiff;
};

//-----------------------------👍👍 Solution 2: bst dfs inorder, but no need to create array! 🟡lc98变形题----------------------
var getMinimumDifference = function (root) {
  let pre = null;
  let minDiff = Infinity;

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    if (pre) {
      const currDiff = Math.abs(pre.val - node.val);
      minDiff = Math.min(minDiff, currDiff);
    }
    pre = node;
    if (node.right) helper(node.right);
  };

  helper(root);
  return minDiff;
};
