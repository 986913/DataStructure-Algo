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
 * @return {TreeNode}
 */

/* 
  注意只要把每一个节点的左右孩子翻转一下，就可以达到整体翻转的效果
  这道题目使用preOrder和postOrder遍历都可以，唯独inOrder遍历不方便，因为inOrder遍历会把某些节点的左右孩子翻转了两次！建议拿纸画一画，就理解了 
*/

// solution 1: DFS preOrder - 递归模版 - leetcode 144
var invertTree = function (root) {
  if (!root) return root;

  const helper = (node) => {
    if (!node) return;

    [node.left, node.right] = [node.right, node.left]; //invert node 的左右节点
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };

  helper(root);
  return root;
};

// solution 2: preorderBFS - 迭代统一模版 - leetcode 144
var invertTree = function (root) {
  if (!root) return root;

  let stack = [root];

  while (stack.length) {
    let curr = stack.pop();

    if (!curr) {
      let node = stack.pop();
      [node.left, node.right] = [node.right, node.left]; //invert node 的左右节点
      continue;
    }

    /* preorder: 中左右， then入栈顺序为：右坐中 */
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
    stack.push(curr);
    stack.push(null);
  }

  return root;
};

// solution 3: 套用BFS模版 （leetcode 102）
var invertTree = function (root) {
  if (!root) return root;

  let queue = [root];
  let node = root;

  while (queue.length) {
    node = queue.shift();
    [node.left, node.right] = [node.right, node.left]; //invert node 的左右节点
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};
