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

/* Pre-order: 中->左-> 右 */

/*************************** Solution 1: 👍👍👍 DFS PreOrder递归模版 遍历思想 ***************************/
const preorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    // change outside variable
    visted.push(node.val); // 中

    // change recurrsion's input:
    helper(node.left); // 左
    helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/*************************** Solution 2: 👍👍👍 Iteration迭代 套用模版  ****************************/
const preorderTraversal = (root) => {
  if (!root) return []; // handle edge case

  let stack = [root];
  let visited = [];

  while (stack.length) {
    let curr = stack.pop();
    visited.push(curr.val); //update result before 入栈

    // 入栈： 先右 -> 后左
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return visited;
};
