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

/******************** Solution1: Recursion, 👍👍 根据BST的顺序特性（分解思想）， 不用DFS pre,post,inorder了 ********************/
var searchBST = function (root, val) {
  //确定终止条件
  if (!root) return null;
  if (root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val); //说明val有可能在左子树里
  if (val > root.val) return searchBST(root.right, val); //说明val有可能在右子树里
};

/******************** Solution2: Recursion, 用DFS Postorder 分解思想 ********************/
var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  const findInLeft = searchBST(root.left, val);
  const findInRight = searchBST(root.right, val);
  return findInLeft || findInRight;
};

/******************** Solution2: Iteration, 👍👍根据BST的顺序特性  ********************/
var searchBST = function (root, val) {
  let cur = root;

  while (cur) {
    if (val < cur.val) {
      cur = cur.left;
    } else if (val > cur.val) {
      cur = cur.right;
    } else {
      return cur;
    }
  }

  return null;
};
