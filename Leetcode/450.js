/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

/**
  二叉搜索树中删除节点遇到的情况：

  case 1. 没找到要删除的node
  case 2. 要删除的node是叶子节点
  case 3. 要删除的node，左子树不为空，右为空
  case 4. 要删除的node，右子树不为空，左为空
  case 5. 要删除的node，左子树不为空，右不为空(最复杂的一个case)
*/

/*--------------------------Solution: Recursion -------------------------------------------------------- */
var deleteNode = function (root, key) {
  /******************** 1.递归函数的终止条件 *******************/
  if (!root) return null; //case 1. 没找到要删除的node

  //找到了要删除的node
  if (root.val === key) {
    //case 2. 要删除的node是叶子节点
    if (!root.left && !root.right) return null;
    //case 3. 要删除的node左子树不为空，右为空
    else if (root.left && !root.right) return root.left;
    //case 4. 要删除的node右子树不为空，左为空
    else if (!root.left && root.right) return root.right;
    //case 5. 要删除的node，左子树不为空，右不为空
    else {
      //找到root右子树的最小值: curr
      let curr = root.right;
      while (curr.left) {
        curr = curr.left;
      }
      //把root(被删节点)的左子树赋值给 root右子树的最小值的左子树
      curr.left = root.left;
      //root右子树继位，代替root(被删节点)的位置（ie:删除了root）
      return root.right;
    }
  }
  /******************** 2.单层递归逻辑 ************************/
  if (key > root.val) root.right = deleteNode(root.right, key);
  if (key < root.val) root.left = deleteNode(root.left, key);
  return root;
};
