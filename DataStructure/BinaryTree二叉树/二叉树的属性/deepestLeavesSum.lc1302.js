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
/*************************** Solution1: BFS 模版变形题 ****************************/
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  let lastRowSum = 0; // <--- 记录每行的sum, return value
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let curSum = 0; // <--- diff is here

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    lastRowSum = curSum; // <--- diff is here
  }

  return lastRowSum;
};

/*************************** Solution2: DFS（遍历思想）+ 回溯  LC104，512变形题 ****************************/
var deepestLeavesSum = function (root) {
  let lastRowSum = 0;
  let maxDepth = -Infinity;

  const traverse = (node, curDepth) => {
    if (!node) return;

    //前序位置:
    curDepth += 1;
    // diff is here: 当遍历到更深层的节点时，更新最大深度，并重置lastRowSum为0，以确保只计算最深层叶子节点的值
    if (curDepth > maxDepth) {
      maxDepth = curDepth;
      lastRowSum = 0; // 记得清零
    }
    // diff is here： 当前层如果是最深层，这里才实际计算最深层叶子节点的值
    if (curDepth === maxDepth) {
      lastRowSum += node.val;
    }
    traverse(node.left, curDepth);
    traverse(node.right, curDepth);
    //后序位置： 回溯！
    curDepth -= 1;
  };

  traverse(root, 0);
  return lastRowSum;
};
