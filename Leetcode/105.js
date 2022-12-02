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
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 👍 https://www.bilibili.com/video/BV1vW4y1i7dn/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;

  const rootVal = preorder.shift(); // 从前序遍历的数组中获取中间节点的值， 即数组第一个值

  const index = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标

  const root = new TreeNode(rootVal); // 创建中间节点

  //创建左节点
  root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
  // 创建右节点
  root.right = buildTree(preorder.slice(index), inorder.slice(index + 1)); // 注意inorder: rootIndex + 1 here

  return root;
};
