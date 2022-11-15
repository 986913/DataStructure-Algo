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

//https://www.bilibili.com/video/BV1Gd4y1V75u/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

// --- Solution1.1 --- BFS: 是102的变形题,只是输出visited.length就行 ------------------------------------
/*
var maxDepth = function (root) {
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

    visited.push(curLevel);
  }

  return visited.length; // return vistied.length instead of visited
}; 
*/

// --- Solution1.2 --- BFS: 是102的变形题 ------------------------------------------------
var maxDepth = function (root) {
  if (!root) return [];

  let height = 0;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    height++; /* 层数+1 */
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return height;
};

// --- Solution2 --- post_order DFS  - 使用递归的方法 递归三部曲------------------------------------------
var maxDepth = function (root) {
  //1.确定递归函数的参数和返回值: 参数就是传入树的根节点，返回就返回这棵树的深度
  const getDepth = (node) => {
    if (node == null) return 0; //2.确定终止条件：如果为空节点的话，就返回0，表示高度为0。

    //3.确定单层递归的逻辑：先求它的左子树的深度，再求的右子树的深度，最后取左右深度最大的数值 再+1 （加1是因为算上当前中间节点）就是目前节点为根节点的树的深度
    let leftTreeDepth = getDepth(node.left); //左
    let rightTreeDepth = getDepth(node.right); // 右
    let depth = 1 + Math.max(leftTreeDepth, rightTreeDepth); //中

    return depth;
  };

  return getDepth(root);
};
