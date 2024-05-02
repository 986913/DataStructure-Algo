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

/*************************** Solution1 :  👍👍👍 BFS 模版变形题 ****************************/
var findBottomLeftValue = function (root) {
  if (!root) return null;

  let queue = [root];
  let mostLeftValue;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (i == 0) mostLeftValue = node.val; // difference is here
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return mostLeftValue;
};

/**************** Solution2 : 👍👍 DFS遍历思想 + backtracking  LC104，1302变形题 ****************/
var findBottomLeftValue = function (root) {
  let mostLeftValue;
  let maxDepth = -Infinity;

  const traversal = (node, curDepth) => {
    if (!node) return;

    //前序位置:
    curDepth += 1;
    // diff is here
    if (curDepth > maxDepth) {
      maxDepth = curDepth;
      mostLeftValue = node.val;
    }
    traversal(node.left, curDepth);
    traversal(node.right, curDepth);
    //后序位置： 回溯！
    curDepth -= 1;
  };

  traversal(root, 0);
  return mostLeftValue;
};
