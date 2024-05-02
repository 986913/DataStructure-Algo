/**
 * Decodes your preorder array to tree.
 * DFS - 分解思想
 * @param {array} preorder
 * @return {TreeNode}
 */

/*------------------------ Solution: 参见 LC297， 449 -------------------------- */
let buildTree = function (preorder) {
  // preorder is just the preOrder array. so the first item is 中's val
  let val = preorder.shift();
  if (val == null) return null; // <--- !!! 前提是Preorder数组中有null

  let node = new TreeNode(val);
  node.left = buildTree(preorder); // 这里preorder已经是shift之后的了
  node.right = buildTree(preorder); // 这里preorder已经是shift之后的了
  return node;
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
