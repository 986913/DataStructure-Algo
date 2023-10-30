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

/* --------------------------Solution1: recursion, 根据BST的顺序特性来搜索的,这里就用不上DFS preorde,postorder,inorder etc了--------*/
var searchBST = function (root, val) {
  //确定终止条件
  if (!root || root.val === val) return root;

  //说明val有可能在左子树里
  if (val < root.val) return searchBST(root.left, val);
  //说明val有可能在右子树里
  if (val > root.val) return searchBST(root.right, val);
};

/* --------------------------Solution2: iteration, 根据BST的顺序特性来搜索的 -----------------------------------------------------*/
var searchBST = function (root, val) {
  while (root) {
    if (val < root.val) {
      root = root.left;
    } else if (val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }

  return null;
};
