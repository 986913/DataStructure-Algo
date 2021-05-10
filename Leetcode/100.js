/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  //有且仅有一个为 null ，直接返回 false
  if ((p === null && q !== null) || (p !== null && q === null)) return false;

  if (p !== null && q !== null) {
    //A 的根节点和 B 的根节点是否相等
    if (p.val !== q.val) return false;
    //A 的左子树和 B 的左子树是否相等，同时 A 的右子树和右子树是否相等。
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  //都为 null，返回 true
  return true;
};
