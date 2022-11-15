/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//👍👍👍 DFS post_order - recursion--------------------------------------

// 1. 确定递归的参数:两个tree NODE : p and q.  和返回值boolean: true false
var isSameTree = function (p, q) {
  //2. 确定终止条件 空的情况
  if (p === null && q !== null) return false;
  else if (p !== null && q === null) return false;
  else if (p === null && q === null) return true;
  else if (p.val !== q.val) return false;

  //3. 当p.val===q.val, 确定单层递归逻辑:
  let isLeftSideSame = isSameTree(p.left, q.left);
  let isRightSideSame = isSameTree(p.right, q.right);

  return isLeftSideSame && isRightSideSame;
};
