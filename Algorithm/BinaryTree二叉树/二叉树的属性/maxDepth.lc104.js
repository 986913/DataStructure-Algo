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

/***************************** Solution1.1 BFS: 是102的变形题,只是输出visited.length就行 **************************
var maxDepth = function (root) {
  if (!root) return 0;

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

    visited.push(curLevel);
  }

  return visited.length; // return vistied.length instead of visited
}; 
*/

/***************************** Solution1.2 BFS 👍 102的变形题 ************************************************/
var maxDepth = function (root) {
  if (!root) return 0;

  let height = 0; // 外部定义一个height
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    height++; // 不同点在这： 层数+1

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return height;
};
/*****************************  Solution2 👍👍👍 DFS（分解思想） ***************************************
 * https://www.bilibili.com/video/BV1Gd4y1V75u/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
 * 二叉树节点的深度(depth)：指从根节点到该节点的最长简单路径边的条数。 求深度(depth)可以从上到下去查 所以需要pre_order前序遍历（中左右）
 * 二叉树节点的高度(height)：指从该节点到叶子节点的最长简单路径边的条数。 求高度(height)只能从下到上去查，所以只能post_order后序遍历（左右中）
 * 那么,为什么这道题求的是二叉树的最大深度，也用的是后序遍历， 那是因为代码的逻辑其实是求的根节点的高度，而根节点的高度就是这棵树的最大深度，所以才可以使用后序遍历
 */
var maxDepth = function (root) {
  //1.确定递归函数的参数和返回值: 参数就是传入树的根节点，返回就返回这棵树的深度
  const helper = (node) => {
    if (!node) return 0; //2.确定终止条件：如果为空节点的话，就返回0，表示高度为0。

    //3.确定单层递归的逻辑：先求它的左子树的深度，再求的右子树的深度，最后取左右深度最大的数值 再+1 （加1是因为算上当前中间节点）就是目前节点为根节点的树的深度
    const leftTreeHeight = helper(node.left);
    const rightTreeHeigh = helper(node.right);
    return 1 + Math.max(leftTreeHeight, rightTreeHeigh);
  };

  return helper(root);
};

/****************************** Solution3 👍👍👍 DFS（遍历思想）+ 回溯 ****************************************/
var maxDepth = function (root) {
  let result = -Infinity;
  if (!root) return 0;

  const traverse = (node, curDepth) => {
    if (!node) return;

    //前序位置
    curDepth += 1;
    result = Math.max(result, curDepth);
    traverse(node.left, curDepth);
    traverse(node.right, curDepth);
    //后序位置
    curDepth -= 1;
  };

  traverse(root, 0);
  return result;
};
