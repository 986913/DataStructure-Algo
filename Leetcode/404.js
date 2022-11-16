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

// 👍👍👍 DFS post_order recursion, 判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子。所以要用post order dfs
var sumOfLeftLeaves = function (root) {
  //1. 递归参数： tree root node,  返回值number：所有left leaf node的和
  const helper = (node) => {
    if (!node) return 0;

    let left_val = helper(node.left); //左
    let right_val = helper(node.right); //右

    let mid_val = 0; //中
    //如果该节点的左节点不为空，该节点的左节点的左节点为空，该节点的左节点的右节点为空，则找到了一个左叶子
    if (node.left && !node.left.left && !node.left.right)
      mid_val = node.left.val;

    return left_val + right_val + mid_val; //所有left leaf node的和
  };

  return helper(root);
};
