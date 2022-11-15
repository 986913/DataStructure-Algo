/**
 * 题目描述:
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * https://www.bilibili.com/video/BV1Ug411S7my/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
 */

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
 * @return {boolean}
 */

// --- Solution1 --- BFS迭代: 是102的变形题 ------------------------------------------------

/**
 *  --- Solution2 👍 --- post_order DFS使用递归三部曲-----------leetcode 104的变形题-------------------------------
 *
 * 二叉树节点的深度(depth)：指从根节点到该节点的最长简单路径边的条数。 求深度(depth)可以从上到下去查 所以需要pre_order前序遍历（中左右）
 * 二叉树节点的高度(height)：指从该节点到叶子节点的最长简单路径边的条数。 求高度(height)只能从下到上去查，所以只能post_order后序遍历（左右中）
 */
var isBalanced = function (root) {
  //1.确定递归函数的参数和返回值: 参数就是传入子树的根节点，返回是-1(代表子树不是平衡二叉树)或者传入子树的的高度
  const getHeight = (node) => {
    if (!node) return 0; //2.确定终止条件

    //3.确定单层递归的逻辑
    let leftHeight = getHeight(node.left);
    if (leftHeight === -1) return -1; // 当判定左子树不为平衡二叉树时,即可直接返回-1
    let rightHeight = getHeight(node.right);
    if (rightHeight === -1) return -1; //当判定右子树不为平衡二叉树时,即可直接返回-1
    let heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) return -1;
    else return 1 + Math.max(leftHeight, rightHeight);
  };

  return !(getHeight(root) === -1);
};
