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

/*************************************************************************************************************
  总结下结论，当二叉树中节点的值不存在重复时：

  1.如果你的序列化结果中不包含空指针的信息，且你只给出1种遍历顺序，那么你无法还原出唯一的一棵二叉树。

  2.如果你的序列化结果中不包含空指针的信息，且你会给出2种遍历顺序，那么分两种情况：
    2.1. 如果你给出的是preorder和inorder，或者postorder和inorder，那么你可以还原出唯一的一棵二叉树。 (LC105, LC106)
    2.2. 如果你给出preorder和postorder，那么你无法还原出唯一的一棵二叉树, 但是可以还原出其中一个二叉树  (LC889)

  3.如果你的序列化结果中包含空指针的信息，且你只给出1种遍历顺序，也要分两种情况：
    3.1. 如果你给出的是preorder或者postorder，那么你可以还原出唯一的一棵二叉树。(LC297,449, buildBinaryTreeFromPostOrder.js, buildBinaryTreeFromPreOrder.js)
    3.2. 如果你给出的是中序，那么你无法还原出一棵二叉树。
*/
