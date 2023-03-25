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

/****************  DFS - Preorder 🟡 类似于lc106*****************************************/

// 递归参数就是传入的是存放元素的数组，返回该数组构造的二叉树的头结点：
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;

  /*构造中间节点*/
  let maxValue = -Infinity;
  let maxValueIdx = -1;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > maxValue) {
      maxValue = nums[index];
      maxValueIdx = index;
    }
  }
  let rootNode = new TreeNode(maxValue);

  /*递归构造左子树：*/
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxValueIdx));
  /*递归构造右子树：*/
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxValueIdx + 1));

  return rootNode;
};
