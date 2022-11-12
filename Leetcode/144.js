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

/*Solution 1: ------------------------------------- recurssion递归 ----------------------------------------------- */
const preorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    // change outside variable
    visted.push(node.val); // 中

    // change recurrsion's input:
    if (node.left) helper(node.left); // 左
    if (node.right) helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/*Solution 2: ------------------------------------iteration迭代 -----------------------------------------------*/
/*
const preorderTraversal = (root) => {
  if (!root) return []; // handle edge case

  let stack = [root];
  let visited = [];

  while (stack.length) {
    let curr = stack.pop(); // 出栈： 中 -> 左 -> 右
    visited.push(curr.val);

    //入栈： 先右 -> 后左
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return visited;
};
*/

// 迭代统一写法:
// 前序遍历：中左右,   then压栈顺序：右左中
var preorderTraversal = function (root) {
  const visited = [];
  const stack = [];

  if (root) stack.push(root);

  while (stack.length) {
    const curr = stack.pop();

    if (!curr) {
      let node = stack.pop();
      visited.push(node.val);
      continue;
    }

    if (curr.right) stack.push(curr.right); // 右
    if (curr.left) stack.push(curr.left); // 左
    stack.push(curr); // 中
    stack.push(null);
  }
  return visited;
};
