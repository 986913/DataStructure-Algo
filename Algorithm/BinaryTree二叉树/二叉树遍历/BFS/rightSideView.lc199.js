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

/* ------ 👍👍👍 二叉树右视图 只需要把每一层最后一个节点存储到res数组 (是102 BFS模版🟡的变形题) ------- */
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
