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

/********************** Solution2: 👍👍👍 DFS + Backtracking (LC112变形题) ***************************/
var pathSum = function (root, targetSum) {
  let result = [];
  if (!root) return result;

  const traverse = (node, curPath, curSum) => {
    if (!node) return;

    //前序位置
    curPath.push(node.val);
    curSum += node.val;
    if (!node.left && !node.right) {
      if (curSum === targetSum) {
        result.push([...curPath]);
      }
    }
    traverse(node.left, [...curPath], curSum); // 数组使用副本
    traverse(node.right, [...curPath], curSum); // 数组使用副本
    //后序位置，backtracking
    curPath.pop();
    curSum -= node.val;
  };

  traverse(root, [], 0);
  return result;
};
