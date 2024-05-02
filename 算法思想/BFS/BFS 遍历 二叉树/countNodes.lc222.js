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

/* ------------------ solution1: 👍👍 BFS遍历 (就把root当成普通的二叉树 binary tree) ------------------*/
var countNodes = function (root) {
  if (!root) return 0;

  // let visited = [];
  let queue = [root];
  let count = 0;

  while (queue.length) {
    let node = queue.shift();
    // visited.push(node.val);
    count++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  // return visited.length;
  return count;
};

/* ------------------ solution2.1 👍👍  DFS遍历 (就把root当成普通的二叉树 binary tree ------------------*/
var countNodes = function (root) {
  // let visited = [];
  let count = 0;

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
    count++;
    // visited.push(node.val);
  };

  helper(root);
  return count;
  // return visited.length;
};
/* ------------------ solution2.2 👍👍  DFS遍历 (就把root当成普通的二叉树 binary tree ------------------*/
var countNodes = function (root) {
  const helper = (node) => {
    if (!node) return 0;

    let leftNodesCount = helper(node.left);
    let rightNodesCount = helper(node.right);
    return leftNodesCount + rightNodesCount + 1;
  };

  return helper(root);
};

/* ------------------ solution3 👍👍👍 利用complete binary tree特性 -----------------------------------
  https://www.bilibili.com/video/BV1eW4y1B7pD/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
*/
var countNodes = function (root) {
  if (!root) return 0;

  let left = root.left; // pointer1 用于统计深度
  let right = root.right; // pointer2 用于统计深度
  let leftDepth = 0;
  let rightDepth = 0;
  //一直向左
  while (left) {
    left = left.left;
    leftDepth++;
  }
  //一直向右
  while (right) {
    right = right.right;
    rightDepth++;
  }
  /* 在Complete binary tree中，如果递归向左遍历的深度等===递归向右遍历的深度，那说明就是满二叉树(full binary tree) 
    计算full binary tree节点数 = 2^depth -1
  */
  if (leftDepth == rightDepth) {
    return Math.pow(2, leftDepth + 1) - 1;
  }

  const leftNodesCount = countNodes(root.left);
  const rightNodesCount = countNodes(root.right);
  return leftNodesCount + rightNodesCount + 1;
};
