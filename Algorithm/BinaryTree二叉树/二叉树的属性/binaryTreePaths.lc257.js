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
// https://www.bilibili.com/video/BV1ZG411G7Dh/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

/***************** Solution1: 👍👍👍 DFS PreOrder + backtracking (LC144, 129变形题🟡) *****************s*/
var binaryTreePaths = function (root) {
  const visited = [];

  const helper = (node, curPathString) => {
    if (!node.left && !node.right) {
      curPathString += node.val;
      visited.push(curPathString);
      return;
    }

    curPathString = curPathString + node.val + '->'; //中
    if (node.left) helper(node.left, curPathString); //左
    if (node.right) helper(node.right, curPathString); //右
  };

  helper(root, '');
  return visited;
};

/***************** Solution2: 👍👍👍 DFS PreOrder + backtracking (LC144, 129变形题🟡) *****************s*/
var binaryTreePaths = function (root) {
  const result = [];

  //1. 确定递归函数参数:树的根节点 和 当前的每一条path:curPath为数组, 无返回值
  const helper = (node, curPath) => {
    curPath.push(node.val); // 中，中为什么写在这里，因为最后一个节点也要加入到path中

    //2. 确定终止条件，到叶子节点就终止, 更新result;
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

  helper(root, []); // initial curpath is []
  return result;
};
