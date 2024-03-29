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
 * @return {TreeNode}
 */

/****************** Solution1: DFS Recursion 遍历思想 - In-order LC538, 530变形题 ********************************/
var convertBST = function (root) {
  let pre = null; //<--- 用pre记录前一个节点

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);

    //中序位置：
    if (pre) node.val += pre.val; // 进行累加
    pre = node; // <--- remember to update pre

    if (node.right) helper(node.right);
  };

  helper(root);
  return root;
};

/****************** Solution2: DFS Inorder Iteration - LC538,LC530, LC94模版变形题 ********************************/
var convertBST = function (root) {
  if (!root) return null;

  let pre = null; //<--- 用pre记录前一个节点
  let stack = [];
  let cur = root;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();

      //中序：
      if (pre) cur.val += pre.val;
      pre = cur;

      cur = cur.right;
    }
  }
  return root;
};
