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

// 是102， 104的变形题：
var minDepth = function (root) {
  if (!root) return [];

  let minHeight = 0;
  let queue = [root];

  while (queue.length) {
    let len = queue.length; // 记录当前层级节点数
    minHeight++;

    //开始遍历当前层节点
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      // 如果左右节点都是null(在遇见的第一个leaf节点上)，则该节点深度最小
      if (node.left === null && node.right === null) return minHeight;
      if (node.left) queue.push(node.left); // 存放当前层的下一层的节点到queue
      if (node.right) queue.push(node.right); // 存放当前层的下一层的节点到queue
    }
  }

  return minHeight;
};
