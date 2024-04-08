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

/************************** BFS (LC102 BFS变形题)***************************/
var maxLevelSum = function (root) {
  if (!root) return 0;

  let maxSum = -Infinity; //记录最大的sum值
  let maxSumLevel = 0; //记录哪一层是最大的sum值， return value
  let depth = 0; //记录当前遍历的层数

  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    depth++; //每进一次while循环，就是每进一层
    let curLevelSum = 0; //记录当前层所以节点的和

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curLevelSum += node.val; // 更新当前层的和
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    //不同点在这: 更新最大和，最大和存在的层数
    if (curLevelSum > maxSum) {
      maxSum = curLevelSum;
      maxSumLevel = depth;
    }
  }

  return maxSumLevel;
};
