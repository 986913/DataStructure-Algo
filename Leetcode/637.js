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

//本题就是层序遍历的时候把一层求个总和在取一个均值 (是102的变形题)
var averageOfLevels = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let currLevel = [];

    //开始遍历当前层节点
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // calculate average:
    const currLevelAverage =
      currLevel.reduce((acc, cur) => acc + cur) / currLevel.length;
    visited.push(currLevelAverage);
  }

  return visited;
};
