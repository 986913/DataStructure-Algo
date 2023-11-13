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

/* -------- Solution  👍👍👍 DFS + backtracking(lc113🟡变形题) ------------------------- */

var sumNumbers = function (root) {
  const paths = [];

  const backtracking = (node, curPath) => {
    if (!node.left && !node.right) {
      curPath += node.val;
      paths.push(curPath);
      return;
    }

    if (node.left) {
      curPath += node.val;
      backtracking(node.left, curPath);
      curPath = curPath.substring(0, curPath.length - 1); // backtracking
    }
    if (node.right) {
      curPath += node.val;
      backtracking(node.right, curPath);
      curPath = curPath.substring(0, curPath.length - 1); // backtracking
    }
  };

  backtracking(root, '');
  return paths.reduce((acc, cur) => Number(acc) + Number(cur));
};
