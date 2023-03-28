/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html#java

/* ----- Solution : recursion，使用 POST_order + 回溯(从下到上)，因为题目的tree是正常的二叉树, lc235🟡的变形题 ----------- */

var lowestCommonAncestor = function (root, p, q) {
  // 1.使用递归的方法, 需要从下到上，所以使用post order
  const helper = (node) => {
    // 2. 确定递归终止条件
    if (!node) return null;
    if (node === p || node === q) return node; // find the p or q node, then return this p or q

    // 3. 确定递归单层逻辑
    let left = helper(node.left); // left maybe p or q (左子树有没有出现过p或q)
    let right = helper(node.right); // right maybe p or q (右子树有没有出现过p或q)

    if (left && right) return node; //如果left和right都不为空，说明此时node就是p和q的最近公共节点。向上返回node
    if (!left) return right; //如果left为空，就向上继续返回right
    if (!right) return left; //如果right为空, 就向上继续返回left
  };
  return helper(root);
};
