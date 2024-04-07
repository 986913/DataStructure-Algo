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

/* in-order: 左-> 中 -> 右 */

/*************************** Solution 1: 👍👍👍 DFS InOrder递归模版 遍历思想 ***************************/
const inorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    helper(node.left); // 左
    visted.push(node.val); // 中
    helper(node.right); // 右
  };

  helper(root);
  return visted;
};
/*************************** Solution 2: DFS PreOrder 分解思想 ***********************************/
const inorderTraversal = (root) => {
  let visited = [];
  if (!root) return visited;

  visited = [...visited, ...inorderTraversal(root.left)];
  visited.push(root.val);
  visited = [...visited, ...inorderTraversal(root.right)];
  return visited;
};

/*************************** Solution 2: 👍👍👍 Iteration 迭代  ----------------------------------------------- */
// https://www.bilibili.com/video/BV1Zf4y1a77g/?spm_id_from=333.788&vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
const inorderTraversal = (root) => {
  let cur = root; //指针用来访问节点

  const stack = [];
  let visited = [];

  while (stack.length || cur !== null) {
    // 当指针cur不为空的时候，要入栈:
    if (cur !== null) {
      stack.push(cur); // 入栈
      cur = cur.left; // 指针用来访问节点,访问到最底层 (一路向左)
    } else {
      // 当指针cur为空的时候，要出栈:
      cur = stack.pop();
      visited.push(cur.val);

      cur = cur.right; // 更新cur
    }
  }

  return visited;
};
