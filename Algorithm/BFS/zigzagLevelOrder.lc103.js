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
 * @return {number[][]}
 */

/* --------------- Solution BFS: 🟡是102的变形题 ----------------------*/
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];
  let level = 0;

  while (queue.length) {
    let currLevel = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    //不同点在这：当前层是奇数层的话就reverse order
    if (level % 2 !== 0) currLevel.reverse();
    level++; // 每进一次while就是新的一层 所以level++

    visited.push(currLevel);
  }

  return visited;
};
