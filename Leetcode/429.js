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

//👍👍👍 每一层可能有2个以上,所以不再使用node.left node.right (是102 BFS 🟡的变形题)
var levelOrder = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let currLevel = [];

    //queue弹出(shift)len个, 并且开始加(push)下一层的节点
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      //这里不再是 ndoe.left node.right 而是循坏node.children:
      for (let child of node.children) {
        if (child) queue.push(child);
      }
    }

    visited.push(currLevel);
  }

  return visited;
};
