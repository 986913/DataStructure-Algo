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

/******************** Solution1: Recursion, 👍👍 根据BST的顺序特性来搜索的,不用DFS pre,post,inorder了 ********************/
var searchBST = function (root, val) {
  //确定终止条件
  if (!node) return null;
  if (node.val === val) return node;

  if (val < root.val) return searchBST(root.left, val); //说明val有可能在左子树里s
  if (val > root.val) return searchBST(root.right, val); //说明val有可能在右子树里
};

/******************** Solution2: Recursion, 用DFS Postorder ********************/
var searchBST = function (root, val) {
  const helper = (node, val) => {
    if (!node) return null;
    if (node.val === val) return node;

    const searchOnLeft = helper(node.left, val);
    const searchOnRight = helper(node.right, val);
    return searchOnLeft || searchOnRight;
  };
  return helper(root, val);
};

/******************** Solution2: Iteration, 👍👍根据BST的顺序特性来搜索的  ********************/
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
