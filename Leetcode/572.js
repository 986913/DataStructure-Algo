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

var isSubtree = function (root, subRoot) {
  if (!root) return false;

  // 1. 确定递归的参数:两个tree: nodeA and nodeB.  和返回值boolean
  const isSameTree = (nodeA, nodeB) => {
    //2. 确定终止条件 空的情况
    if (nodeA === null && nodeB !== null) return false;
    else if (nodeA !== null && nodeB === null) return false;
    else if (nodeA === null && nodeB === null) return true;
    else if (nodeA.val !== nodeB.val) return false;

    //3. 当left.val===right.val, 确定单层递归逻辑:
    let isLeftSideSame = isSame(nodeA.left, nodeB.left);
    let isRightSideSame = isSame(nodeA.right, nodeB.right);

    return isLeftSideSame && isRightSideSame;
  };

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
