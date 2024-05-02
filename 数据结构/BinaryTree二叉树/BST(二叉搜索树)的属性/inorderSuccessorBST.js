/**
  The in-order successor of a node in a binary Search Tree (BST) is the next node in in-order traversal. 
  Write a method to find the in-order successor of a given value “d” in a BST.

  Consider the following BST(root):
            100
            / \
          50  200
          /\   / \
        25 75 125 350
  
  inorderSuccessorBST(root, 25) // 50
  inorderSuccessorBST(root, 50) // 75
  inorderSuccessorBST(root, 75) // 100
  inorderSuccessorBST(root, 100) // 125
              .
              .
              .
  inorderSuccessorBST(root, 350) // null
 */

/*------------------------ Solution -------------------------- */
const findMin = (root) => {
  if (!root) return null;
  while (root.left) {
    root = root.left;
  }
  return root;
};

const inorderSuccessorBST = (root, val) => {
  if (!root) return null;

  let successor = null; // <--- diff is here

  while (root) {
    if (root.val < val) {
      root = root.right;
    } else if (root.val > val) {
      successor = root; // <--- diff is here
      root = root.left;
    } else {
      // when val === root.val （ie:在树中找到了val时, successor就是其右子树中最小的值）
      if (root.right) successor = findMin(root.right);
      break;
    }
  }
  return successor;
};
