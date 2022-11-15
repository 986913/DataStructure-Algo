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

//solution1:     DFS - recursion     postorder: 左右中
var postorder = function (root) {
  let visited = [];
  const helper = (node) => {
    if (!node) return;

    //这里不再是nide.left, node.right了， 而是循环node.children
    for (let child of node.children) {
      helper(child);
    }
    visited.push(node.val);
  };

  helper(root);
  return visited;
};
