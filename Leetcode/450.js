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
  case 5. 要删除的node，左子树不为空，右不为空
*/

const getMinNode = (root) => {
  while (root.left) {
    root = root.left;
  }
  return root;
};

var deleteNode = function (root, key) {
  /* 确定递归终止条件: 遇到空返回 其实这也说明没找到删除的节点，遍历到空节点直接返回了 */
  if (!root) return null; //case 1. 没找到要删除的node

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    if (!root.left && !root.right) return null; //case 2. 要删除的node是叶子节点,返回NULL为根节点

    if (root.left && !root.right)
      return root.left; //case 3. 要删除的node左子树不为空，右为空 则 移除节点，左孩子补位，返回左孩子为根节点
    else if (!root.left && root.right) return root.right; //case 4. 要删除的node右子树不为空，左为空 则 移除节点,右孩子补位,返回右孩子为根节点

    //case 5. 要删除的node左右子树都不为空
    let min = getMinNode(root.right); // 找出要删除的node右子树中的最小node (也就是min变量)
    min.left = root.left; // 再安排要删除的node左子树到min的左子树位置上
    //再移除root， 返回删除节点右孩子为新的根节点。
    return root.right;
  }
};
