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
 * @return {number}
 */

//BFS: 是102的变形题,只是输出visited.length就行
var maxDepth = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let curLevel = [];

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    visited.push(curLevel);
  }

  return visited.length; // return vistied.length instead of visited
};

//BFS: 或者这个都行：
var maxDepth = function (root) {
  if (!root) return [];

  let height = 0;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    height++; /* 层数+1 */
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return height;
};
