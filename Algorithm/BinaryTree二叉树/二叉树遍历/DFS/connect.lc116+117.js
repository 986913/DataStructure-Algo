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

/************* Solution1: 👍👍👍 BFS (是102 BFS的变形题, 和116一毛一样) **********/
var connect = function (root) {
  if (!root) return root;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      //在单层遍历的时候 让弹出的节点node 指向 本层的头部节点queue[0]
      if (i < len - 1) {
        node.next = queue[0];
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};

/************* Solution2: DFS Preorder - Recursion 遍历思想 **********/
var connect = function (root) {
  const traverse = (node) => {
    if (!node) return;

    //前序位置：
    if (node.left) {
      node.left.next = node.right;
    }
    if (node.right) {
      if (node.next) {
        node.right.next = node.next.left;
      } else {
        node.right.next = null;
      }
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);
  return root;
};
