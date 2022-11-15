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

//solution1: 👍👍👍  DFS - recursion     preorder: 中左右
var preorder = function (root) {
  let visited = [];

  const helper = (node) => {
    if (!node) return;

    visited.push(node.val);
    //这里不再是nide.left, node.right了， 而是循环node.children
    for (let child of node.children) {
      helper(child);
    }
  };

  helper(root);
  return visited;
};
