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

/*  ------------------------- 👍👍👍 BFS (是102 BFS 🟡的变形题, 和116一毛一样) --------------------*/
var connect = function (root) {
  if (!root) return root;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      //在单层遍历的时候记录一下本层的头部节点，然后在遍历的时候让前一个节点指向本节点就可以了
      if (i < len - 1) {
        node.next = queue[0];
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};
