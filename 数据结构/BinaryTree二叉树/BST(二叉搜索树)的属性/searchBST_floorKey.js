/**
  BST中找key值:
    1. 找到key, return node;
    2. 找不到key, return 比key小，且离key最近的node
 */

/******************** Solution1: Recursion, 👍👍 根据BST的顺序特性（分解思想) LC700的变形题 ********************/

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) {
    const foundNode = searchBST(root.right, val); // <--- diff is here
    if (foundNode === null) return root; // <--- diff is here: 说明在右子树中没找到key,那么就返回自己
    return foundNode; // <--- diff is here： 说明在右子树中找到key,返回foundNode
  }
};
