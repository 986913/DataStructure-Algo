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
 * @return {number}
 */

/***************************** DFS - 遍历思想 ***************************************/
var goodNodes = function (root) {
  const traversal = (node, curMaxVal) => {
    // base case
    if (!node) return 0;

    //pre order postion
    let isSelfGood;
    if (node.val >= curMaxVal) {
      isSelfGood = true;
      curMaxVal = node.val;
    } else {
      isSelfGood = false;
    }
    const leftGoodCounts = traversal(node.left, curMaxVal);
    const rightGoodCounts = traversal(node.right, curMaxVal);
    return (isSelfGood ? 1 : 0) + leftGoodCounts + rightGoodCounts;
  };

  // dfs
  return traversal(root, -Infinity);
};
