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
// --- Solution1.2 --- BFS: 👍👍👍 是102的变形题 ------------------------------------------------
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

/**--- Solution2.1 👍👍👍 --- post_order DFS使用递归三部曲 ------------------------------------------------
 * https://www.bilibili.com/video/BV1Gd4y1V75u/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
 *
 * 二叉树节点的深度(depth)：指从根节点到该节点的最长简单路径边的条数。 求深度(depth)可以从上到下去查 所以需要pre_order前序遍历（中左右）
 * 二叉树节点的高度(height)：指从该节点到叶子节点的最长简单路径边的条数。 求高度(height)只能从下到上去查，所以只能post_order后序遍历（左右中）
 *
 * 那么,为什么这道题求的是二叉树的最大深度，也用的是后序遍历， 那是因为代码的逻辑其实是求的根节点的高度，而根节点的高度就是这棵树的最大深度，所以才可以使用后序遍历
 */
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

/**--- Solution2.2 👍👍👍 --- post_order DFS 使用递归三部曲 + 回溯 -------------------------------------*/
var maxDepth = function (root) {
  if (!root) return 0;

  let maxDepth = -Infinity; //用来记录tree的最大深度

  //1.  确定递归的参数: tree node和 当前深度，不需要返回值了
  const helper = (node, curDepth) => {
    //2. 确定终止条件：碰到叶子节点，有必要时更新maxDepth
    if (!node.left && !node.right) {
      if (curDepth > maxDepth) maxDepth = curDepth;
    }
    //3. 确定单层递归逻辑:
    if (node.left) {
      //左
      curDepth++;
      helper(node.left, curDepth);
      curDepth--; // backtracking 回溯！！
    }
    if (node.right) {
      // 右
      curDepth++;
      helper(node.right, curDepth);
      curDepth--; // backtracking 回溯！！
    }
  };

  helper(root, 1);
  return maxDepth;
};
