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

/* in-order: 左-> 中 -> 右 */

/*Solution 1: ------------------------------------- recurssion递归 ----------------------------------------------- */
const inorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left); // 左
    visted.push(node.val); // 中
    if (node.right) helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/*Solution 2: ------------------------------------iteration迭代 -----------------------------------------------*/
const inorderTraversal = (root) => {
  if (!root) return [];

  var stack = [root];
  var vistied = [];

  while (stack.length) {
    if (root) {
      root = root.left; // 左
      if (root) stack.push(root);
    } else {
      root = stack.pop(); // 中
      vistied.push(root.val);

      root = root.right; // 右
      if (root) stack.push(root);
    }
  }
  return vistied;
};
