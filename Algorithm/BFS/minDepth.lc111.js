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

/* ------------ Solution 1: 👍👍👍 BFS. 是102, 104的🟡变形题：------------------------------*/
var minDepth = function (root) {
  if (!root) return [];

  let minHeight = 0;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    minHeight++; // 每进一次while就是新的一层 minHeight++

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      // 不同点在这: 如果左右节点都是null(在遇见的第一个leaf节点上)，则该节点深度最小
      if (node.left === null && node.right === null) return minHeight;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return minHeight;
};

/* ------------Solution 2: 👍👍👍 DFS_postorder - recursion ---------------------------------- */
var minDepth = function (root) {
  //1. 确定递归函数的参数和返回值: 参数为要传入的二叉树root，返回的是int类型的深度
  const getHeight = (node) => {
    if (!node) return 0; //2. 确定终止条件： 终止条件也是遇到空节点返回0，表示当前节点的高度为0

    //3. 确定单层递归的逻辑:
    let leftTreeDepth = getHeight(node.left); // zuo
    let rightTreeDepth = getHeight(node.right); // you
    /* zhong */
    if (node.left === null && node.right !== null) return 1 + rightTreeDepth; //如果左子树为空，右子树不为空，说明最小深度是 1 + 右子树的深度
    if (node.left !== null && node.right === null) return 1 + leftTreeDepth; //右子树为空，左子树不为空，最小深度是 1 + 左子树的深度
    return 1 + Math.min(leftTreeDepth, rightTreeDepth); //左右子树都不为空，返回左右子树深度最小值 + 1
  };

  return getHeight(root);
};

//https://www.bilibili.com/video/BV1QD4y1B7e2/
/**
 * 求二叉树的最min深度和求二叉树的最max深度的差别主要在于处理左右孩子不为空的逻辑。
 */
