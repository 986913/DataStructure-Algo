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
 * @param {number} val
 * @return {TreeNode}
 */

/******************** Solution1: DFS Postorder （分解思想） LC700变形题 ********************/
var searchBT_V1 = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  const findInLeft = searchBT(root.left, val);
  const findInRight = searchBT(root.right, val);
  return findInLeft || findInRight;
  /*
  以下等价于上面的findInLeft || findInRight
    const findInLeft = searchBT(root.left, val);
    if (findInLeft) return findInLeft;
    const findInRight = searchBT(root.right, val);
    if (findInRight) return findInRight;
    return null;
  */
};

// 寻找值为 val1 或 val2 的节点 ----------> ！！！！！ LCA问题的基本模版 ！！！！！
var searchBT_V2 = function (root, val1, val2) {
  if (!root) return null;
  if (root.val === val1 || root.val === val2) return root;

  const findInLeft = searchBT(root.left, val1, val2);
  const findInRight = searchBT(root.right, val1, val2);
  return findInLeft || findInRight; // could return findInLeft, findInRight, or null
};

/******************** Solution2: DFS （遍历思想） LC700变形题  ********************/
var searchBT_V1 = function (root, val) {
  if (!root) return null;
  let found = null;

  const traversal = (node) => {
    if (node.val === val) {
      found = node;
      return;
    }
    traversal(node.left);
    traversal(node.right);
  };

  traversal(root);
  return found;
};
