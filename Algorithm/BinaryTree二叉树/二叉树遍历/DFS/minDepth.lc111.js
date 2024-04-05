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

/******************** Solution 1: BFS (LC102, 104变形题) ******************************/
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

/******************** Solution 2: DFS PostOrder (分解思想) ******************************
 * https://www.bilibili.com/video/BV1QD4y1B7e2/
 * 求二叉树的最min深度 和 最max深度的差别主要在于: 处理左右孩子不为空的逻辑。
 */

var minDepth = function (root) {
  //1. 确定递归函数的参数和返回值: 参数为要传入的二叉树root，返回的是int类型的深度
  const helper = (node) => {
    if (!node) return 0; //2. 确定终止条件： 终止条件也是遇到空节点返回0，表示当前节点的高度为0

    //3. 确定单层递归的逻辑:
    let leftTreeDepth = helper(node.left); // zuo
    let rightTreeDepth = helper(node.right); // you
    /* zhong */
    if (node.left === null && node.right !== null) return 1 + rightTreeDepth; //如果左子树为空，右子树不为空，说明最小深度是 1 + 右子树的深度
    if (node.left !== null && node.right === null) return 1 + leftTreeDepth; //右子树为空，左子树不为空，最小深度是 1 + 左子树的深度
    return 1 + Math.min(leftTreeDepth, rightTreeDepth); //左右子树都不为空，返回左右子树深度最小值 + 1
  };

  return helper(root);
};

/******************** Solution 3: DFS（遍历思想）+ 回溯  ******************************/
var minDepth = function (root) {
  if (!root) return 0;
  let result = Infinity;

  const traversal = (node, curDepth) => {
    if (!node) return;

    //前序位置
    curDepth++;
    if (!node.left && !node.right) {
      result = Math.min(result, curDepth); //到叶子节点才更新result
    }
    traversal(node.left, curDepth);
    traversal(node.right, curDepth);
    //后序位置
    curDepth--;
  };

  traversal(root, 0);
  return result;
};
