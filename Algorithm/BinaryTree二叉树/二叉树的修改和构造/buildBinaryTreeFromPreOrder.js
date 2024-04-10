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
