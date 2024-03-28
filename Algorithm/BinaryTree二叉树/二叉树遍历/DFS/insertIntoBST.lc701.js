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

/*************************** Solution 1: DFS Recursion - 👍分解问题思路 LC700变形题 ****************************/
var insertIntoBST = function (root, val) {
  const helper = (node, value) => {
    if (!node) return new TreeNode(val); // 如果当前节点为空，则插入一个新节点。

    //按照二叉搜索树的规则去遍历
    if (value < node.val) {
      node.left = helper(node.left, value); // 递归调用左子树
    } else {
      node.right = helper(node.right, value); // 递归调用右子树
    }
    return node;
  };

  return helper(root, val);
};

/*************************** Solution 2: DFS Recursion - 遍历思路 LC700变形题 ****************************/
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  let parent = null;
  const traverse = (node, val) => {
    if (!node) {
      //当前节点node为空节点时, 那么给其父节点parent添加新造的节点newNode
      let newNode = new TreeNode(val);
      if (val < parent.val) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
      return;
    }

    parent = node; //<---- 放到前序位置就是parent, 要是放到中序位置就是pre(参考: LC530, 538)
    if (val < node.val) {
      traverse(node.left, val);
    } else {
      traverse(node.right, val);
    }
    return node;
  };

  traverse(root, val);
  return root;
};

/*************************** Solution 3: Iteration, 👍👍根据BST的顺序特性来搜索的 ****************************/
var insertIntoBST = function (root, val) {
  let newNode = new TreeNode(val);
  if (!root) return new TreeNode(val);

  let parent = null; // <--- 用parent记录要插入的节点
  let cur = root;
  while (cur) {
    parent = cur; //先update插入的节点parent

    if (val > cur.val) {
      cur = cur.right;
    } else {
      cur = cur.left;
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
