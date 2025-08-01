/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

/******************** solution: 👍👍👍  DFS - Recursion 遍历思想  *********************/
var postorder = function (root) {
  let visited = [];
  const traversal = (node) => {
    if (!node) return;

    //这里不再是nide.left, node.right了， 而是循环node.children
    for (let child of node.children) {
      traversal(child);
    }
    //后序位置
    visited.push(node.val);
  };

  traversal(root);
  return visited;
};
