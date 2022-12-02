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

var buildTree = function (inorder, postorder) {
  if (!inorder.length) return null;

  const rootVal = postorder.pop(); // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值

  let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标

  const root = new TreeNode(rootVal); // 创建中间节点

  // 创建左节点
  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );

  // 创建右节点
  root.right = buildTree(
    inorder.slice(rootIndex + 1), // 注意inorder: rootIndex + 1 here
    postorder.slice(rootIndex)
  );

  return root;
};
