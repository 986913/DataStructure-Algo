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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

/************************** Solution1: DFS遍历思想 ******************************/
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const traversal = (node) => {
    if (!node) return;

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    traversal(node.left);
    traversal(node.right);
  };

  traversal(root);
  return sum;
};

/************************** Solution2: 👍 DFS遍历思想 + BST特性 ******************************/
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const traversal = (node) => {
    if (!node) return;

    //优化1: 当前节点小于最低，不必要遍历左子树 只遍历右子树，
    if (node.val < low) {
      traversal(node.right);
    }
    //优化2: 当前节点大于最高，不必要遍历右子树 只遍历左子树，
    else if (node.val > high) {
      traversal(node.left);
    } else {
      //和上述solution1一样
      sum += node.val;
      traversal(node.left);
      traversal(node.right);
    }
  };

  traversal(root);
  return sum;
};

/************************** Solution3： BFS 模版变形 ******************************/
var rangeSumBST = function (root, low, high) {
  let sum = 0; // <--- diff is here
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.val >= low && node.val <= high) sum += node.val; // <--- diff is here

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return sum;
};
