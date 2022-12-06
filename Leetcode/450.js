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
递归终止条件：
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
  if (!root) return null; //case 1. 没找到要删除的node

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    if (!root.left && !root.right) return null; //case 2. 要删除的node是叶子节点

    if (root.left && !root.right)
      return root.left; //case 3. 要删除的node，左子树不为空，右为空
    else if (!root.left && root.right) return root.right; //case 4. 要删除的node，右子树不为空，左为空

    //case 5. 要删除的node左右子树都不为空
    let min = getMinNode(root.right); // 找出要删除的node右子树中的最小node (也就是min变量)
    min.left = root.left; // 再安排要删除的node左子树到min的左子树位置上
    //再移除root
    return root.right;
  }
};
