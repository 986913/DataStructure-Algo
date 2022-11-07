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
 * @return {number[]}
 */

/* Post-order: 左-> 右 -> 中 */

/*Solution 1: ------------------------------------- recurssion递归 ----------------------------------------------- */
const postorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    // change recurrsion's input:
    if (node.left) helper(node.left); // 左
    if (node.right) helper(node.right); // 右

    // change outside variable
    visted.push(node.val); // 中
  };

  helper(root);
  return visted;
};

/*Solution 2: ------------------------------------iteration迭代 -----------------------------------------------*/
const postorderTraversal = (root) => {
  if (!root) return [];

  const stack = [root];
  const visited = [];

  while (stack.length) {
    const curr = stack.pop(); // 出栈： 中 -> 右 -> 左 结果翻转！

    visited.push(curr.val); //中
    // 入栈： 先左 -> 后右
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return visited.reverse();
};
