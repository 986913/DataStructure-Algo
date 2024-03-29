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

/******************************** Solution1: DFS Recursion - 👍分解问题思路 *********************************
  
  https://programmercarl.com/0450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html#%E6%80%9D%E8%B7%AF
  二叉搜索树中删除节点遇到的情况：
  case 1. 没找到要删除的node
  case 2. 要删除的node是叶子节点
  case 3. 要删除的node，左子树不为空，右为空
  case 4. 要删除的node，右子树不为空，左为空
  case 5. 要删除的node，左子树不为空，右不为空(最复杂的一个case)
*/

var deleteNode = function (root, key) {
  const helper = (node, key) => {
    if (!node) return null; //case 1. 没找到要删除的node
    //找到了要删除的node
    if (node.val === key) {
      if (!node.left && !node.right) return null; //case 2. 要删除的node是叶子节点
      if (node.left && !node.right) return node.left; //case 3. 要删除的node左子树不为空，右为空
      if (!node.left && node.right) return node.right; //case 4. 要删除的node右子树不为空，左为空
      //case 5. 要删除的node，左右子树都不为空:
      if (node.left && node.right) {
        //找到node右子树的最小值: curr
        let curr = node.right;
        while (curr.left) {
          curr = curr.left;
        }
        curr.left = node.left; //把node(被删节点)的左子树赋值给 node右子树的最小值的左子树
        return node.right; //node右子树继位，代替node(被删节点)的位置（ie:删除了node）
      }
    }

    if (key > node.val) node.right = helper(node.right, key);
    if (key < node.val) node.left = helper(node.left, key);
    return node;
  };

  return helper(root, key);
};
