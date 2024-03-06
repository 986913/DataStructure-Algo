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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

/* --------------- 👍👍👍 DFS post_order 使用递归遍历左右子树 递归三部曲 (leetcode 100🟡的变形题) --------------- */

//main function:
const isSubtree = (root, subRoot) => {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;

  /*注意call isSubtree 而不是isSameTree */
  const isLeftSubTree = isSubtree(root.left, subRoot);
  const isRightSubTree = isSubtree(root.right, subRoot);
  return isLeftSubTree || isRightSubTree;
};

// helper function:
// 1. 确定递归的参数:两个tree: nodeA and nodeB.  和返回值boolean
const isSameTree = (A, B) => {
  //2. 确定终止条件 空的情况
  if (A === null && B !== null) return false;
  else if (A !== null && B === null) return false;
  else if (A === null && B === null) return true;
  else if (A.val !== B.val) return false;

  //3. 当left.val===right.val, 确定单层递归逻辑:
  const isLeftSameTree = isSameTree(A.left, B.left); // left
  const isRightSameTree = isSameTree(A.right, B.right); // right
  return isLeftSameTree && isRightSameTree; // middle
};
