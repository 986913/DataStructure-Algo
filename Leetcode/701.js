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

/*************************** Solution 1: DFS Recursion - 分解问题思路 LC700变形题 ****************************/
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val); // 如果树为空，则直接返回新节点作为根节点

  const helper = (node, value) => {
    if (!node) return new TreeNode(val); // 如果当前节点为空，则创建一个新节点

    if (value < node.val) {
      node.left = helper(node.left, value); // 递归调用左子树
    } else {
      node.right = helper(node.right, value); // 递归调用右子树
    }
    return node;
  };

  return helper(root, val);
};

/*************************** Solution 2: DFS Recursion - 遍历思路 🟡LC700变形题 ****************************/
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val); // 如果树为空，则直接返回新节点作为根节点

  const traverse = (node) => {
    if (!node) return; // 如果树为空，则直接返回新节点作为根节点

    let newNode = new TreeNode(val);
    if (val < node.val) {
      node.left ? traverse(node.left) : (node.left = newNode); // 如果左子树为空，则将新节点插入左子树, 否则继续遍历左子树
    }
    if (val > node.val) {
      node.right ? traverse(node.right) : (node.right = newNode); // 如果右子树为空，则将新节点插入右子树, 否则继续遍历右子树
    }
  };

  traverse(root);
  return root;
};

/*************************** Solution 3: Iteration 🟡LC700变形题 ****************************/
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
