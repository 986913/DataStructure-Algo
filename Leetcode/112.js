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

/***************** Solution1: 👍 DFS PostOrder + backtracking (分解思路) **********************************
  https://www.bilibili.com/video/BV19t4y1L7CR/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
*/
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  //1. 确定递归函数 函数参数:树的根节点和curSum, 返回值boolean
  const helper = (node, curSum) => {
    if (!node) return;

    //前序位置
    curSum += node.val;
    //到叶子节点就终止
    if (!node.left && !node.right) return curSum === targetSum;

    let foundInLeft = helper(node.left, curSum);
    if (foundInLeft) return true; // <--- 递归, 如果递归函数返回true，说明找到了合适的路径，应该立刻返回
    let foundInRight = helper(node.right, curSum);
    if (foundInRight) return true; // <--- 递归, 如果递归函数返回true，说明找到了合适的路径，应该立刻返回

    //后序位置 backtracking
    curSum -= node.val;
    return false; //当节点的左右子树都没找到目标值时，直接return false
  };

  return helper(root, 0);
};

/***************** Solution2: 👍👍👍 DFS + backtracking (遍历思路) **********************************/
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
