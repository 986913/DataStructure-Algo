/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

/*--------------- Solution: DFS（分解思想） LC449，buildBinaryTreeFromPreOrder.js 变形题 ------------ */
// 输入数组preOrder: 中左右

var bstFromPreorder = function (preorder) {
  if (!preorder.length) return null;

  let nodeVal = preorder.shift(); //中节点的值
  let node = new TreeNode(nodeVal); // 创造中节点
  //依据BST的特性：当前节点>其左子树所有节点，当前节点<其右子树所有节点，找出切割preorder数组的idx
  let splitIndex = 0;
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] < nodeVal) splitIndex += 1;
  }

  node.left = bstFromPreorder(preorder.slice(0, splitIndex));
  node.right = bstFromPreorder(preorder.slice(splitIndex));
  return node; //返回中节点
};
