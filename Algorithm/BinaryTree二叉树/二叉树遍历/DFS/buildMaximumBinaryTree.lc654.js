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

/****************  DFS - Preorder 🟡类似于LC 105, 106****************************************
  👍 https://www.bilibili.com/video/BV1MG411G7ox/?spm_id_from=333.999.0.0&vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
  
  核心思想：先构造中间节点，然后递归构造左子树和右子树
  Steps:
    1. nums数组length为0时, 代表没有中节点，返回null;
    2. nums中最大的数maxValue就是中节点，确定maxValue的下标(maxValueIdx)
    3. 根据maxValueIdx切割nums为左区间 右区间
    4. 递归构造左节点，右节点
    5. return中节点
*/

// 递归参数就是传入的是存放元素的数组，返回该数组构造的二叉树的头结点：
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;

  //得出nums中的最大值和其下标
  let maxValue = -Infinity;
  let maxValueIdx = -1;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > maxValue) {
      maxValue = nums[index];
      maxValueIdx = index;
    }
  }

  /*构造中间节点*/
  let rootNode = new TreeNode(maxValue);
  /*递归构造左子树：*/
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxValueIdx));
  /*递归构造右子树：*/
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxValueIdx + 1));

  return rootNode;
};
