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

/****************** Solution1: DFS Recursion - In-order, 但是！是反中序(右中左) LC530变形题 ********************************/
var convertBST = function (root) {
  let pre = null; //<--- 用pre记录前一个节点

  const helper = (node) => {
    if (!node) return;

    if (node.right) helper(node.right); // 右 <--- it's not left

    //中序位置：
    if (pre) node.val += pre.val; // 进行累加
    pre = node; // <--- remember to update pre

    if (node.left) helper(node.left); // 左 <--- it's not right
  };

  helper(root);
  return root;
};

/****************** Solution2: DFS Inorder Iteration -  但是！是反中序(右中左), LC530, LC94模版变形题 ********************************/
var convertBST = function (root) {
  if (!root) return null;

  let pre = null; //<--- 用pre记录前一个节点
  let stack = [];
  let cur = root;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.right; // 右 <--- it's not left
    } else {
      cur = stack.pop();

      //中序：
      if (pre) cur.val += pre.val;
      pre = cur;

      cur = cur.left; // 左 <--- it's not right
    }
  }
  return root;
};
