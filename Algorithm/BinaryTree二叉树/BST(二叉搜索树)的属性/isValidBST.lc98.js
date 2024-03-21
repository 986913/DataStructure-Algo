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
 * @return {boolean}
 */

//----------------------------👍 Solution 1: DFS Inorder traversal with array assistance ---------------------------------------------
var isValidBST = function (root) {
  const visited = [];

  const helper = (node) => {
    if (!node) return true;

    if (node.left) helper(node.left); //zuo
    visited.push(node.val); // zhong
    if (node.right) helper(node.right); // you
  };

  helper(root);

  //BST inorder出来的顺序是一个递增的。。
  for (let i = 0; i < visited.length; i++) {
    if (visited[i + 1] <= visited[i]) return false;
  }
  return true;
};

//----------------------------👍👍 Solution 2: DFS Inorder traversal without array assistance ---------------------------------------------
var isValidBST = function (root) {
  let pre = null; //用pre记录前一个节点

  const helper = (node) => {
    if (!node) return true;

    let left = helper(node.left); // zuo
    if (pre && pre.val >= node.val) return false; // inorder左中右，prev.val要是比现在节点大，那说明不是BST了
    pre = node; //inorder左中右，prev.val比现在节点小，则继续update pre
    let right = helper(node.right); //you

    return left && right;
  };

  return helper(root);
};
