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

/*************************** Solution 1: 👍👍👍 Recursion 递归模版 ----------------------------------------------- */
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

/*************************** Solution 2: 👍👍👍 Iteration 迭代  ----------------------------------------------- */
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

/* 迭代统一写法: 中序遍历：左中右     then压栈顺序：右中左

  var inorderTraversal = function (root) {
    const visited = [];
    const stack = [];

    if (root) stack.push(root);

    while (stack.length) {
      const curr = stack.pop();

      if (!curr) {
        let node = curr.pop();
        visited.push(node.val);
        continue;
      }

      if (curr.right) stack.push(curr.right); // 右
      stack.push(curr); // 中
      stack.push(null);
      if (curr.left) stack.push(curr.left); // 左
    }
    return visited;
  };
*/
