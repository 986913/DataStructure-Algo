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
 * @return {boolean}
 */

/***************** Solution1: DFS PostOrder + backtracking (分解思路) *****************************/
// 递归函数参数:树的根节点和targetSum, 返回值boolean
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;

  const foundInLeft = hasPathSum(root.left, targetSum - root.val);
  const foundInRight = hasPathSum(root.right, targetSum - root.val);
  return foundInLeft || foundInRight;
};

/***************** Solution2: DFS + backtracking (遍历思路) **********************************/
var hasPathSum = function (root, targetSum) {
  let found = false;
  if (!root) return false;

  const traverse = (node, curSum) => {
    if (!node) return;

    //前序位置
    curSum += node.val;
    if (!node.left && !node.right) {
      if (curSum === targetSum) found = true;
    }
    traverse(node.left, curSum);
    traverse(node.right, curSum);
    //后序位置，backtracking
    curSum -= node.val;
  };

  traverse(root, 0);
  return found;
};
