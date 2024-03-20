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

/* -------- Solution 1:  👍👍👍 DFS + backtracking(lc112🟡变形题) ------------------------- */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  let paths = [];

  // recursion params: node, count, curPath,   no return value
  const helper = (node, count, curPath) => {
    if (!node.left && !node.right && count === 0) {
      //收集结果：
      curPath = [...curPath, node.val];
      paths.push(curPath);
    }

    if (node.left) {
      count -= node.left.val;
      curPath = [...curPath, node.val];

      helper(node.left, count, curPath);

      count += node.left.val; // backtracking
      curPath.pop(); // backtracking
    }

    if (node.right) {
      count -= node.right.val;
      curPath = [...curPath, node.val];

      helper(node.right, count, curPath);

      count += node.right.val; // backtracking
      curPath.pop(); // backtracking
    }
  };

  helper(root, targetSum - root.val, []);
  return paths;
};
