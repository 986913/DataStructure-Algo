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
 * @return {string[]}
 */

//👍👍👍 DFS pre_order recursion: -- dfs_preorder模版变形题 (leetcode 144)

var binaryTreePaths = function (root) {
  let allPaths = [];

  //1. 确定递归函数 函数参数:树的根节点 和 当前的每一条path: curPath, 无返回值
  const getPath = function (node, curPath) {
    //2. 确定终止条件，到叶子节点就终止, 更新curPath, allPaths
    if (!node.left && !node.right) {
      curPath += node.val;
      allPaths.push(curPath);
      return;
    }

    //3. 确定单层递归逻辑
    curPath = curPath + node.val + '->'; //中
    node.left && getPath(node.left, curPath); // 左
    node.right && getPath(node.right, curPath); //右
  };

  getPath(root, '');
  return reallPathss;
};
