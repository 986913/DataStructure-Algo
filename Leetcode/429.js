/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

/******************************* BFS(102变形题) ********************************/
var levelOrder = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let currLevel = [];

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      //不同点在这：这里不再是 ndoe.left node.right 而是用for-of循坏node.children
      for (let child of node.children) {
        if (child) queue.push(child);
      }
    }

    visited.push(currLevel);
  }

  return visited;
};
