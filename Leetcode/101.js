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

var isSymmetric = function (root) {
  if (root == null) return true;
  return isSymmetricHelper(root.left, root.right);
};

const isSymmetricHelper = (left, right) => {
  //有且仅有一个为 null ，直接返回 false
  if ((left == null && right != null) || (left != null && right == null)) return false;

  if (left != null && right != null) {
    //A 的根节点和 B 的根节点是否相等
    if (left.val != right.val) return false;
    //A 的左子树和 B 的右子树是否相等，同时 A 的右子树和左子树是否相等。
    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left)
  }

  //都为 null，返回 true
  return true;
};
