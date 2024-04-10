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

/***************** Solution1: 👍👍👍 DFS(遍历思路) preOrder OR postOrder  LC144变形题 ****************
反转二叉树：
  注意只要把每一个节点的左右孩子翻转一下，就可以达到整体翻转的效果
  这道题目使用preOrder和postOrder遍历都可以，
  唯独inOrder遍历不方便，因为inOrder遍历会把某些节点的左右孩子翻转了两次！建议拿纸画一画，就理解了 

  ✅PreOrder: 🀄️左右 （先处理中 再递归左右子树）
        4                       4                            4                          4
      /   \                   /   \                        /   \                      /   \
    2       7    ---🀄️--->   7      2   ---递归左子树--->   7     2   ---递归右子树--->  7     2 
  /  \     / \              / \    / \                   / \    / \                 / \    / \
  1   3   6   9            6   9  1  3                  9   6   1  3               9   6  3   1

  ✅PostOrder: 左右🀄 （先递归左右子树 再处理中）
        4                       4                            4                          4
      /   \                   /   \                        /   \                      /   \
    2       7 --递归左子树-->  2     7  ---递归右子树--->     2     7   ---🀄️--->        7     2 
  /  \     / \              / \    / \                   / \    / \                 / \    / \
  1   3   6   9            3   1  6   9                 3   1   9  6               9   6  3   1


  ❌InOrder: 左🀄右 （先递归左子树 再处理中 先递归右子树）❌会重复反转左子树
        4                       4                            4                          4
      /   \                   /   \                        /   \                      /   \
    2       7 --递归左子树-->  2     7        ----🀄️--->    7     2   ---递归右子树--->  7     2 
  /  \     / \              / \    / \                   / \    / \                 / \    / \
  1   3   6   9            3   1  6   9                 6   9  3   1               6   9  1   3
*/
const invertTree = (root) => {
  // recursion para: treenode,   output: void
  const helper = (node) => {
    if (!node) return;

    // 前序位置:
    [[node.left], [node.right]] = [[node.right], [node.left]];
    if (node.left) helper(node.left); // zuo
    if (node.right) helper(node.right); // you
  };

  helper(root);
  return root;
};

/* ************************ Solution2: 👍 DFS preOrder迭代模版 - LC144 *************************/
var invertTree = function (root) {
  if (!root) return null;

  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    [curr.right, curr.left] = [curr.left, curr.right]; //不同点在这：swap curr的左右节点

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return root;
};

/* -------------- solution 3: 👍👍👍 套用BFS模版 （LC 102）---------------------------------- */
var invertTree = function (root) {
  if (!root) return root;

  let queue = [root];
  while (queue.length) {
    node = queue.shift();
    [node.left, node.right] = [node.right, node.left]; //不同点在这：invert node 的左右节点
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};
