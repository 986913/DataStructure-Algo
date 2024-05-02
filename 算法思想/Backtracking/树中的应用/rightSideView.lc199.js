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
 * @return {number[]}
 */

/**************************** BFS 👍👍👍 二叉树右视图 (102 BFS模版变形题) 只需要把每一层最后一个节点存储到res数组 *****************************/
var rightSideView = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      //不同点在这： 当i==len-1的时候表明到了这一层的最后一个节点!
      if (i === len - 1) {
        visited.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return visited;
};

/**************************** 👍 DFS 遍历思想 + backtracking LC104变形题 *****************************/
var rightSideView = function (root) {
  let visited = [];

  const traversal = (node, curDepth) => {
    if (!node) return;

    // 前序位置
    curDepth++;
    // diff is here: 这一层还没有记录值，说明node 就是右侧视图的第一个节点
    if (visited.length < curDepth) {
      visited.push(node.val);
    }
    // 注意，这里反过来，先遍历右子树再遍历左子树, 这样首先遍历的一定是右侧节点
    traversal(node.right, curDepth); // <--- diff is here
    traversal(node.left, curDepth); // <--- diff is here
    // 后序位置
    curDepth--;
  };

  traversal(root, 0);
  return visited;
};
