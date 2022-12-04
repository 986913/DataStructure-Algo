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

// 递归参数就是传入的是存放元素的数组，返回该数组构造的二叉树的头结点：
var constructMaximumBinaryTree = function (nums) {
  //递归终止条件：当构造到叶子节点时候
  if (nums.length === 1) return new TreeNode(nums[0]); // 注意return是node

  /*构造中间节点*/
  let maxVal = -Infinity;
  let maxValIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxVal) {
      maxVal = nums[i];
      maxValIndex = i;
    }
  }
  let node = new TreeNode(maxVal); // middle node

  /*递归构造左子树：*/
  if (maxValIndex > 0) {
    node.left = constructMaximumBinaryTree(nums.slice(0, maxValIndex)); // 切割数组
  }

  /*递归构造右子树：*/
  if (maxValIndex < nums.length - 1) {
    node.right = constructMaximumBinaryTree(nums.slice(maxValIndex + 1)); // 切割数组
  }

  return node;
};
