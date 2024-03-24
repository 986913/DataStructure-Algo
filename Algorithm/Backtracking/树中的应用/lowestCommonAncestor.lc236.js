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

/*********************** Solution: DFS PostOrder Recursion - LC235🟡变形题 ************************
  https://www.bilibili.com/video/BV1jd4y1B7E2/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/
var lowestCommonAncestor = function (root, p, q) {
  // 1.使用递归的方法, 需要从下到上，所以使用Post order, 找到p或q就输出节点p或q,找不到输出null
  const helper = (node) => {
    // 2. 确定递归终止条件
    if (!node) return null;
    if (node === p || node === q) return node; // find the p or q node, then return this p or q

    const isLeftHasPorQ = helper(node.left); // 左， isLeftHasPorQ maybe p or q (左子树有没有出现过p或q)
    const isRightHasPorQ = helper(node.right); // 右， isRightHasPorQ maybe p or q (右子树有没有出现过p或q)

    //（中处理中间节点的逻辑，回溯）后序位置：
    if (isLeftHasPorQ && isRightHasPorQ) return node; //若找到p和q,此时node就是p和q的最近公共节点。向上返回node
    if (!isLeftHasPorQ) return isRightHasPorQ; //如果左子树没出现过p或q 就向上继续返回右子树
    if (!isRightHasPorQ) return isLeftHasPorQ; //如果右子树没出现过p或q 就向上继续返回左子树
    if (!isLeftHasPorQ && !isRightHasPorQ) return null; // 若未找到节点 p 或 q
  };

  return helper(root);
};
