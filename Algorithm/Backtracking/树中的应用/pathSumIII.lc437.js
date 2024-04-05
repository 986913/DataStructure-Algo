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
 * @return {number}
 */

/********************** Solution2: 👍👍👍 DFS + Backtracking (LC113变形题) ***************************/
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  let count = 0;

  const traversal = (node, curSum) => {
    if (!node) return;

    curSum += node.val;
    if (curSum === targetSum) count++;
    traversal(node.left, curSum);
    traversal(node.right, curSum);

    curSum -= node.val;
  };

  //其实就是多了这一步：dfs
  const dfs = (node) => {
    if (!node) return;

    traversal(node, 0);
    dfs(node.left);
    dfs(node.right);
  };

  /* 之前是traversal(root, 0)得到的结果只是从root开始的.  
    因为本题目要求不一定是从root开始，leaf结束，所以我们要dfs所有的节点！
    (ie: 也就是说让每一个节点都当次root)
  */
  dfs(root); // <-- differet is here

  return count;
};
