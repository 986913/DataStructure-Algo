/**
 * Definition for a Node:
 *
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

/******************** solution: 👍👍👍  DFS - Recursion 遍历思想  *********************/
var preorder = function (root) {
  let visited = [];

  const traversal = (node) => {
    if (!node) return;

    //前序位置：
    visited.push(node.val);
    //这里不再是nide.left, node.right了， 而是循环node.children
    for (let child of node.children) {
      traversal(child);
    }
  };

  traversal(root);
  return visited;
};
