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
/********************************* DFS PostOrder, LC104变形题 *************************************************/
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const helper = (node) => {
    if (!node) return 0;

    const leftTreeHeight = helper(node.left);
    const rightTreeHeigh = helper(node.right);
    // change variable outside (后序位置，顺便计算最大直径: 就是一个节点的左右子树的最大深度之和)
    maxDiameter = Math.max(maxDiameter, leftTreeHeight + rightTreeHeigh); // <--- diff is here
    return 1 + Math.max(leftTreeHeight, rightTreeHeigh);
  };

  helper(root);
  return maxDiameter;
};
