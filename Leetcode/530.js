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
 * @return {number}
 */

/********* Solution 1: BST DFS Inorder - Recursion, need array assistance 🟡LC98变形题 ******************/
var minDiffInBST = function (root) {
  const visited = [];

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    visited.push(node.val);
    if (node.right) helper(node.right);
  };

  helper(root);

  let minAbsDiff = Infinity;
  for (let i = 0; i < visited.length; i++) {
    const diff = Math.abs(visited[i] - visited[i + 1]);
    if (diff < minAbsDiff) {
      minAbsDiff = diff;
    }
  }

  return minAbsDiff;
};

/************** 👍👍 Solution 2: BST DFS Inorder - Recursion, no array assistance 🟡LC98, 230 变形题 ************/
var minDiffInBST = function (root) {
  let pre = null; //<--- diff is here, 用pre记录前一个节点
  let minDiff = Infinity;

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    //中序位置
    if (pre) {
      minDiff = Math.min(minDiff, Math.abs(pre.val - node.val));
    }
    pre = node; // <--- remember to update pre
    if (node.right) helper(node.right);
  };

  helper(root);
  return minDiff;
};

/************** Solution 3: DFS Inorder - Iteration LC94 🟡 模版变形题 ****************/
var minDiffInBST = function (root) {
  let cur = root;

  const stack = [];
  let minDiff = Infinity;
  let pre = null;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();

      // difference is here
      if (pre) {
        minDiff = Math.min(minDiff, Math.abs(pre.val - cur.val));
      }
      pre = cur; // remember to update pre

      cur = cur.right;
    }
  }

  return minDiff;
};
