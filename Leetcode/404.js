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

/*********************** Solution 1.1: 👍 DFS PostOrder 模版变形题 ***********************/
var sumOfLeftLeaves = function (root) {
  //1. 递归参数：树节点， 无返回值， 递归函数会modify外部的sum
  const helper = (node) => {
    //2. 递归终止条件
    if (!node) return 0;

    //3. 开始递归单层逻辑
    //左
    let sumOfLeft = 0;
    /* (判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子)
       当该节点有左节点，该节点的左节点的左节点为空，该节点的左节点的右节点为空，则就找到了一个左叶子 */
    if (node.left) {
      if (!node.left.left && !node.left.right) sumOfLeft += node.left.val;
      else sumOfLeft += helper(node.left); // Traverse left subtree recursively.
    }
    const sumOfRight = helper(node.right); // 右
    return sumOfLeft + sumOfRight; // 中
  };

  return helper(root);
};

/*********************** Solution 1.2: 👍 DFS PostOrder 模版变形题 ***********************/
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  if (!root) return sum;

  const helper = (node) => {
    if (node.left && !node.left.left && !node.left.right) sum += node.left.val;
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };

  helper(root);
  return sum;
};

/*************************** Solution 2: 👍 BFS 模版变形题 ****************************/
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  let queue = [root];
  let sum = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      //证明node.left是个左叶子
      if (node.left && !node.left.left && !node.left.right) {
        sum += node.left.val;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return sum;
};
