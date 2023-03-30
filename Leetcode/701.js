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

/*  -------------------------------------- Solution 1: DFS Recursion ------------------------------------ */

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val); //找到了插入位置(叶子节点)，然后创建且返回新节点

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val); // 在这连接上了新节点和父亲节点，新建节点作为父节点左子树 --> root.left子树
  } else {
    root.right = insertIntoBST(root.right, val); //在这连接上了新节点和父亲节点，新建节点作为父节点右子树 --> root.right子树
  }

  return root;
};

/*  -------------------------------------- Solution 2: Iteration ------------------------------------ */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  let parent = null; //记录插入的节点
  let curr = root; // copy一份root为curr, 遍历curr而不直接遍历root
  let newNode = new TreeNode(val);

  while (curr) {
    parent = curr; // update 插入的节点

    if (val > curr.val) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }

  //找到插入的节点后，利用BST的特性开始插入新节点
  if (parent.val > val) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }

  //返回插好的root
  return root;
};
