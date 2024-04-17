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

/********************** Solution: 👍👍👍 DFS遍历思想 + Backtracking (LC437变形题) ***************************/

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

  //其实就是多了这一步：dfs
  const dfs = (node) => {
    if (!node) return;

    traversal(node, null, 0);
    dfs(node.left);
    dfs(node.right);
  };

  /* 之前是traversal(root, null, 0)得到的结果只是从root开始的.  
    因为本题目要求不一定是从root开始，leaf结束，所以我们要dfs所有的节点！
    (ie: 也就是说让每一个节点都当次root)
  */
  dfs(root); // <-- differet is here

  return longestLen;
};
