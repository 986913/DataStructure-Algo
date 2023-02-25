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

/* -------- 👍👍👍 DFS Pre_order recursion: dfs_preorder模版变形题 (leetcode 144🟡) -------- */

var binaryTreePaths = function (root) {
  const result = [];

  //1. 确定递归函数 函数参数:树的根节点 和 当前的每一条path: curPath, 无返回值
  const helper = (node, curPath) => {
    curPath.push(node.val); // 中

    //2. 确定终止条件，到叶子节点就终止, 更新curPath, allPaths
    if (!node.left && !node.right) {
      result.push(curPath.join('->'));
      return;
    }

    //3. 确定单层递归逻辑
    if (node.left) {
      //左
      helper(node.left, curPath);
      curPath.pop(); // <-- backtracking
    }
    if (node.right) {
      //右
      helper(node.right, curPath);
      curPath.pop(); // <-- backtracking
    }
  };

  helper(root, []);
  return result;
};

//https://www.bilibili.com/video/BV1ZG411G7Dh/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
