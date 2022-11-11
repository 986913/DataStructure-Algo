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

//本题就是层序遍历的时候得出每一层的最大值  (是102的变形题)
var largestValues = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length; // 记录当前层级节点数
    let curLevel = []; //curLevel用于存放每一层的节点

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      if (node.left) queue.push(node.left); // 存放当前层的下一层的节点到queue
      if (node.right) queue.push(node.right); // 存放当前层的下一层的节点到queue
    }

    const curLevelMaxValue = Math.max.apply(Math, curLevel); // calculate max value of each level
    visited.push(curLevelMaxValue); //把每一层的最大值放到结果数组
  }

  return visited;
};
