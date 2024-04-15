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
 * @param {number[]} postorder
 * @return {TreeNode}
 */

/**************************  DFS 分解思想 *******************************/
var constructFromPrePost = function (preorder, postorder) {
  // base case:
  if (!preorder.length) return null;

  // 中: 先创建中间节点root（前序遍历结果的第一个元素作为中节点）
  let rootVal = preorder.shift();
  let root = new TreeNode(rootVal);
  const rootIndex = postorder.indexOf(preorder[0]); // <-- differe is here, 根节点的值在postorder中的索引

  // 左： 创建左节点
  root.left = constructFromPrePost(
    preorder.slice(0, rootIndex + 1), // <-- differe is here,
    postorder.slice(0, rootIndex + 1) // <-- differe is here,
  );
  // 右： 创建右节点
  root.right = constructFromPrePost(
    preorder.slice(rootIndex + 1), // <-- differe is here,
    postorder.slice(rootIndex + 1, postorder.length - 1) // <-- differe is here, 注意要去掉最后一个元素，因为最后一个元素是根节点
  );
  //返回中节点
  return root;
};
