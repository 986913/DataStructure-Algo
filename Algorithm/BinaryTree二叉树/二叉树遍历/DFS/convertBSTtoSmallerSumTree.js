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

/****************** Solution1: DFS Recursion - In-order LC538, 530变形题 ********************************/
var convertBST = function (root) {
  let pre = null; //<--- 用pre记录前一个节点

  const traversal = (node) => {
    if (!node) return;

    traversal(node.left);
    //中序位置：
    if (pre) node.val += pre.val; // 进行累加
    pre = node; // <--- remember to update pre
    traversal(node.right);
  };

  traversal(root);
  return root;
};
/****************** Solution2: DFS Recursion - In-order LC538, 530变形题 ********************************/
var bstToSst = function (root) {
  let curSum = 0; //<--- 用curSum记录当前的累加值

  const traversal = (node) => {
    if (!node) return 0;

    traversal(node.left);
    //中序位置：
    curSum += node.val; // 进行累加
    node.val = curSum; // update node val
    traversal(node.right);
  };

  traversal(root);
  return root;
};

/****************** Solution3: DFS Inorder Iteration - LC538,LC530, LC94模版变形题 ********************************/
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
