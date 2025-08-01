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
 * @return {boolean}
 */

/************************** Solution1: 👍 DFS（遍历思想） 将BST转变成一个数组  **************************/
var isValidBST = function (root) {
  const visited = [];

  const traversal = (node) => {
    if (!node) return true;

    if (node.left) traversal(node.left); //zuo
    visited.push(node.val); // zhong
    if (node.right) traversal(node.right); // you
  };

  traversal(root);

  //BST inorder出来的顺序是一个递增的。。
  for (let i = 0; i < visited.length; i++) {
    if (visited[i + 1] <= visited[i]) return false;
  }
  return true;
};

/******************** Solution2: 👍 DFS Inorder（遍历思想) LC 94,230,530变形题 ********************/
var isValidBST = function (root) {
  let pre = null; //<--- diff is here, 用pre记录前一个节点

  const traversal = (node) => {
    if (!node) return true;

    let isLeftValidBST = traversal(node.left); // 左
    //diff is here: 中序位置：
    if (pre && pre.val >= node.val) {
      return false; // prev.val要是比现在节点node.val大，那说明不是BST了
    } else {
      pre = node; //prev.val比现在节点node.val小，则继续update pre
    }
    let isRightValidBST = traversal(node.right); //右

    return isLeftValidBST && isRightValidBST;
  };

  return traversal(root);
};

/***************************** Solution3: 👍👍 DFS（分解思想） **********************************/
var isValidBST = function (root) {
  return isValid(root, null, null); // 判断一颗BST的值是否在min和max之间
};
// helper function: min和max是Node节点，不是int
const isValid = (node, min, max) => {
  if (!node) return true;
  if (max && node.val >= max.val) return false;
  if (min && node.val <= min.val) return false;

  //限定左子树的最大值是node.val，右子树的最小值是node.val
  const isLeftValid = isValid(node.left, min, node);
  const isRightValid = isValid(node.right, node, max);
  return isLeftValid && isRightValid;
};
