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
 * @return {string[]}
 */

/************* Solution  👍👍👍 DFS 遍历思想 + backtracking(LC112,113,129🟡变形题) **************/
var binaryTreePaths = function (root) {
  let paths = [];

  const traverse = (node, curPath) => {
    if (!node) return;

    //前序位置
    curPath.push(node.val);
    if (!node.left && !node.right) {
      paths.push(curPath.join('->'));
    }
    traverse(node.left, curPath);
    traverse(node.right, curPath);
    //后序位置，backtracking
    curPath.pop();
  };

  traverse(root, []);
  return paths;
};
