/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

/*  题目给定一个已经排好序的数组，要求构造一个高度平衡的二叉搜索树。那么，我们可以采用递归方式进行处理
    1. 先得到数组元素的中间元素，将它的值作为根节点
    2. 并且以它为中间中介，将数组划分为左右区间。根节点的左子树指向左区间，右节点指向右区间。
    3. 然后不断缩小左右区间
*/

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null; //recursion stop here

  let midIndex = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[midIndex]);

  node.left = sortedArrayToBST(nums.slice(0, midIndex));
  node.right = sortedArrayToBST(nums.slice(midIndex + 1));

  return node;
};
