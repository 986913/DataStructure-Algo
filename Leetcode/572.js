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

/* --------------- 👍👍👍 DFS post_order (分解思路) 使用递归遍历左右子树 (LC100 LC1367变形题) --------------- */
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
