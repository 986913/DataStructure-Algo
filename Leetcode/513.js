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

//  👍👍👍  BFS 模版变形题 ---------------------------------------------------------------------------------
const findBottomLeftValue = (root) => {
  if (!root) return 0;

  let queue = [root];
  let visited = [];
  // let depth=0;  //optional: 用来记录tree多少层总共

  while (queue.length) {
    let len = queue.length;
    let curLevel = [];
    // depth++     //optional: 每进一次while循环就是一层

    //每进一个forloop就是遍历一层中每个节点
    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      curLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    visited.push(curLevel);
  }

  return visited[visited.length - 1][0]; // return visited[depth-1][0];
};

// https://www.bilibili.com/video/BV1424y1Z7pn/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
// 👍👍 DFS recursion + backtracking - 前后中序都可以  -------------------------------------------------------------------------------

var findBottomLeftValue = function (root) {
  let maxDepth = -Infinity; //用来记录tree的最大深度
  let resultValue; //存放结果值

  //1.  确定递归的参数,返回值， 这里就不需要返回值了，所以递归函数的返回类型为void。
  const helper = (node, curDepth) => {
    //2. 确定终止条件：碰到叶子节点，有必要时更新maxDepth和resultValue
    if (!node.left && !node.right) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth;
        resultValue = node.val;
      }
      // return;
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
  return resultValue;
};
