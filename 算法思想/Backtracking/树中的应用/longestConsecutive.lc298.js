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

/********************** Solution: 👍👍👍  DFS遍历思想 + Backtracking (LC112,113,129,257,1457变形题) ***************************/

var longestConsecutive = function (root) {
  let longestLen = 0;

  const traversal = (node, parent, curLen) => {
    if (!node) return;

    //前序位置：
    if (parent && parent.val === node.val - 1) curLen += 1;
    else curLen = 1;
    longestLen = Math.max(longestLen, curLen);
    traversal(node.left, node, curLen);
    traversal(node.right, node, curLen);
    //后序位置： backtracking
    curLen -= 1;
  };

  traversal(root, null, 0);
  return longestLen;
};
