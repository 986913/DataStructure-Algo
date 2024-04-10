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

/*************** Solution: DFS（分解思想） preorder, inorder, postorder都行 ****************/

//递归参数是要传入两个二叉树的根节点，返回值就是合并之后二叉树的根节点。
var mergeTrees = function (root1, root2) {
  //确定终止条件：
  if (!root1 && !root2) return null;
  if (root1 && !root2) return root1;
  if (!root1 && root2) return root2;

  //确定单层递归的逻辑：
  let newNode = new TreeNode(root1.val + root2.val); //中
  newNode.left = mergeTrees(root1.left, root2.left); //左：构造左子树
  newNode.right = mergeTrees(root1.right, root2.right); //右：构造右子树
  return newNode;
};
