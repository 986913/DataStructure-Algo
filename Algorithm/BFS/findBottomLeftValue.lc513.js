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

/* --------- Solution1 :  👍👍👍  BFS 模版变形题 ----------------------------------*/
var findBottomLeftValue = function (root) {
  if (!root) return null;

  let queue = [root];
  let mostLeftValue;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (i == 0) mostLeftValue = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return mostLeftValue;
};

// https://www.bilibili.com/video/BV1424y1Z7pn/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
/* --------- Solution2:  👍👍 DFS + backtracking (前后中序都可以) leetcode 104 解法2.2的变体 */

var findBottomLeftValue = function (root) {
  let maxDepth = -Infinity; //用来记录tree的最大深度
  let mostleftvalue; //存放结果值

  //1.  确定递归的参数, 不需要返回值
  const helper = (node, curDepth) => {
    //2. 确定终止条件：碰到叶子节点，有必要时更新maxDepth和mostleftvalue
    if (!node.left && !node.right) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth;
        mostleftvalue = node.val;
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
  return mostleftvalue;
};
