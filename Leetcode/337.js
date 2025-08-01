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

// ---------------------- DP Solution --------------------------------
const rob = (root) => {
  // 后序遍历函数
  const postOrder = (node) => {
    // 递归出口
    if (!node) return [0, 0];

    const left = postOrder(node.left); // 遍历左子树
    const right = postOrder(node.right); // 遍历右子树
    // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
    const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    // 偷当前节点，左右子节点只能不偷
    const Do = node.val + left[0] + right[0];

    // [不偷，偷]
    return [DoNot, Do];
  };
  const res = postOrder(root);

  // 返回最大值
  return Math.max(...res);
};
