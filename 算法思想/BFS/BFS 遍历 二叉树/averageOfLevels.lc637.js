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

/************************** BFS (LC102, 1161 BFS变形题)***************************/
var averageOfLevels = function (root) {
  if (!root) return [];

  let queue = [root];
  let visited = [];

  while (queue.length) {
    let len = queue.length;
    let curLevelSum = 0; //记录当前层所以节点的和

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curLevelSum += node.val; //update curLevelSum
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    //不同点在这: 算出每一层的平均值
    let curLevelAvg = curLevelSum / len;
    visited.push(curLevelAvg);
  }

  return visited;
};
