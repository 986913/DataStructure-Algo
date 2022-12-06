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
 * @param {number} val
 * @return {TreeNode}
 */

//  -------------------------------------- Solution 1: DFS Recursion ------------------------------------

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val); //找到了插入位置(叶子节点)，然后创建且返回新节点

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val); // 在这连接上了新节点和父亲节点，新建节点作为父节点左子树 --> root.left子树
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val); //在这连接上了新节点和父亲节点，新建节点作为父节点右子树 --> root.right子树
  }

  return root;
};

//  -------------------------------------- Solution 2: Iteration ------------------------------------
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  let parent = null; //记录插入的节点

  let curr = root;
  while (curr) {
    parent = curr; //update插入的节点，直到叶子节点
    if (curr.val > val) curr = curr.left;
    else curr = curr.right;
  }

  let newnode = new TreeNode(val);
  // 开始插入：
  if (parent.val > val) parent.left = newnode;
  else parent.right = newnode;

  return root;
};
