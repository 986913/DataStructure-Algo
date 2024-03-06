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

/* ------------ 👍👍👍 本题就是层序遍历的时候得出每一层的最大值 (是102 BFS🟡的变形题) ------------------------ */
var largestValues = function (root) {
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
    //不同点在这： calculate max value of each level
    const curLevelMaxValue = Math.max.apply(Math, curLevel);
    visited.push(curLevelMaxValue);
  }

  return visited;
};
