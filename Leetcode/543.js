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
/********************************* DFS PostOrder 遍历思想, LC104变形题 *************************************************/
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const traverse = (node) => {
    if (!node) return 0;

    const leftTreeDepth = traverse(node.left);
    const rightTreeDepth = traverse(node.right);
    // change variable outside (后序位置顺便计算最大直径: 就是一个节点的左右子树的最大深度之和)
    maxDiameter = Math.max(maxDiameter, leftTreeDepth + rightTreeDepth); // <--- diff is here
    return 1 + Math.max(leftTreeDepth, rightTreeDepth);
  };

  traverse(root);
  return maxDiameter;
};
