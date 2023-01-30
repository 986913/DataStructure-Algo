/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

//👍👍👍 本题依然是层序遍历，只不过在单层遍历的时候记录一下本层的头部节点，然后在遍历的时候让前一个节点指向本节点就可以了 (是102 BFS 🟡的变形题)
var connect = function (root) {
  if (!root) return root;
  let queue = [root];

  while (queue.length) {
    let len = queue.length; // 记录当前层级节点数

    //queue弹出(shift)len个, 并且开始加(push)下一层的节点
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (i < len - 1) {
        node.next = queue[0];
      }
      if (node.left) queue.push(node.left); // 存放当前层的下一层的节点到queue
      if (node.right) queue.push(node.right); // 存放当前层的下一层的节点到queue
    }
  }

  return root;
};
