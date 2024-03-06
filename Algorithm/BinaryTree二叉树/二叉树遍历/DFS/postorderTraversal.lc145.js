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

/*************************** Solution 1: 👍👍👍 Recursion 递归模版 ----------------------------------------------- */
const postorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    // change recurrsion's input:
    helper(node.left); // 左
    helper(node.right); // 右

    // change outside variable
    visted.push(node.val); // 中
  };

  helper(root);
  return visted;
};

/*************************** Solution 2: 👍👍👍 Iteration 迭代  ----------------------------------------------- */
const postorderTraversal = (root) => {
  if (!root) return [];

  const stack = [root];
  const visited = [];

  while (stack.length) {
    const curr = stack.pop();
    visited.push(curr.val); // update result before 入栈

    // 入栈： 先左 -> 后右
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return visited.reverse(); //  中 -> 右 -> 左  反转为 ： 左 -> 右 -> 中
};

/* 迭代统一写法: 后续遍历：左右中  then压栈顺序：中右左

  var postorderTraversal = function (root) {
    const visited = [];
    const stack = [];

    if (root) stack.push(root);

    while (stack.length) {
      const curr = stack.pop();

      if (!curr) {
        let node = curr.pop();
        visited.push(node.val);
        continue;
      }

      stack.push(curr); // 中
      stack.push(null);
      if (curr.right) stack.push(curr.right); // 右
      if (curr.left) stack.push(curr.left); // 左
    }

    return visited;
  };
*/
