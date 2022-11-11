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

// 是102的变形题,只是输出visited.length就行
var maxDepth = function (root) {
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

    visited.push(curLevel); //把每一层的结果放到结果数组
  }

  return visited.length;
};

//或者这个都行：
var maxDepth = function (root) {
  if (!root) return [];

  let height = 0;
  let queue = [root];

  while (queue.length) {
    let len = queue.length; // 记录当前层级节点数
    height++;

    //开始便利每一层节点
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left); // 存放当前层的下一层的节点到queue
      if (node.right) queue.push(node.right); // 存放当前层的下一层的节点到queue
    }
  }

  return height;
};
