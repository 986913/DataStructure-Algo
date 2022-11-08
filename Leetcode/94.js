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

/*Solution 1: ------------------------------------- recurssion递归 ----------------------------------------------- */
const inorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left); // 左
    visted.push(node.val); // 中
    if (node.right) helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/*Solution 2: ------------------------------------iteration迭代 -----------------------------------------------*/
const inorderTraversal = (root) => {
  let cur = root; //指针用来访问节点

  const stack = [];
  let visited = [];

  while (stack.length || cur) {
    //指针用来访问节点,访问到最底层
    if (cur) {
      stack.push(cur); // 将访问的节点放进栈
      cur = cur.left; // 左
    } else {
      cur = stack.pop(); // --> 弹出 中
      visited.push(cur.val);

      cur = cur.right; // 右
    }
  }

  return visited;
};
