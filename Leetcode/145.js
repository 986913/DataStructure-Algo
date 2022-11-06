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

  const visited = [];
  const stack = [root];

  while (stack.length) {
    const curr = stack.pop();

    visited.unshift(curr.val);
    //先左后右
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return visited;
};
