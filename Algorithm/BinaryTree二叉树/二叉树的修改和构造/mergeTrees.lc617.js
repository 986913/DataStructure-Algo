/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

//递归参数是要传入两个二叉树的根节点，返回值就是合并之后二叉树的根节点。

/*----------------- Solution: DFS  preorder, inorder, postorder 都行！--------------- */
var mergeTrees = function (root1, root2) {
  //确定终止条件：
  if (root1 && !root2) return root1;
  if (!root1 && root2) return root2;
  if (!root1 && !root2) return null;

  // 确定单层递归的逻辑：
  const sum = root1.val + root2.val;
  const newRoot = new TreeNode(sum);

  //构造左子树
  newRoot.left = mergeTrees(root1.left, root2.left);
  //构造右子树
  newRoot.right = mergeTrees(root1.right, root2.right);

  return newRoot;
};
