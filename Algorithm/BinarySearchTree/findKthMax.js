/**
  I mplement a function findKthMax(root,k) which will take a BST and any number “k” as an input,
  and return kth maximum number from that tree. 
  Assume that “k” will always be less than or equal to the total number of nodes.
 */

// -------------------------👍 Solution : DFS Inorder traversal with array assistance ---------------------------------------------
function findKthMax(root, k) {
  const visited = [];

  const helper = (node) => {
    if (!node) return true;

    if (node.left) helper(node.left);
    visited.push(node.val);
    if (node.right) helper(node.right);
  };

  helper(root);

  return visited[visited.length - k];
}
