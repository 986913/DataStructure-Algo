/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */

/*********************** Solution: DFS PostOrder(分解思想) - LC236变形题 ************************
  key point: 如果一个节点能够在它的左右子树中分别找到p和q，则该节点为LCA节点
  与LC236唯一不同地方是输入， 236输入2个节点，此题输入多个节点
*/

var lowestCommonAncestor = function (root, nodes) {
  return searchBT(root, nodes);
};

const searchBT = (root, nodes) => {
  if (!root) return;
  //前序位置： diff is here
  for (let node of nodes) {
    if (root.val === node.val) return root; //当前节点等于其中一个node的值 且当前节点是LCA节点
  }

  const findInLeft = searchBT(root.left, nodes);
  const findInRight = searchBT(root.right, nodes);
  //后序位置：回溯
  if (findInLeft && findInRight) return root; //左右子树中找到其中一个node，则当前节点是LCA节点,向上返回node
  return findInLeft || findInRight;
};
