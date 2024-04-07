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

/*********************** Solution 1.1: 👍 DFS 分解思想 ***********************/
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  /* (判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子)
       当该节点有左节点，该节点的左节点的左右节点都为空，则就找到了一个左叶子 */
  let sumOfLeft = 0;
  if (root.left) {
    if (!root.left.left && !root.left.right) {
      sumOfLeft += root.left.val; // 找到一个左叶子节点，更新sumOfLeft
    } else {
      //继续向左子树找
      sumOfLeft += sumOfLeftLeaves(root.left);
    }
  }
  const sumOfRight = sumOfLeftLeaves(root.right);
  return sumOfLeft + sumOfRight;
};

/*********************** Solution 1.2: 👍 DFS 遍历思想 ***********************/
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
