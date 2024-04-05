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

/******************************* Solution: BFS ********************************************
 * 如果节点node的index为i，那么它的两个子节点的index是2i和2i+1
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxWidth = 0;

  let queue = [{ node: root, index: 0 }]; // <--- diff is here, 以前直接存的node,这道题存的不一样
  while (queue.length) {
    let len = queue.length;
    let leftIndex = -1; // <-- diff, 初始化当前左边界索引为-1
    let rightIndex = -1; // <-- diff, 初始化当前右边界索引为-1

    for (let i = 0; i < len; i++) {
      let { node, index } = queue.shift();

      if (i === 0) leftIndex = index; //<--diff, 如果是当前层的第1个节点，则将其索引赋值给左边界索引
      rightIndex = index; //<--diff, 每次都更新右边界索引为当前节点的索引

      if (node.left)
        queue.push({
          node: node.left, // <---diff, 左子节点的索引为当前节点索引的两倍
          index: 2 * index,
        });
      if (node.right)
        queue.push({
          node: node.right,
          index: 2 * index + 1, // <---diff, 右子节点的索引为当前节点索引的两倍+1
        });
    }

    maxWidth = Math.max(maxWidth, rightIndex - leftIndex + 1);
  }
  return maxWidth;
};
