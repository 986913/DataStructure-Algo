/**
  Given the roots of two binary trees, determine if these trees are identical or not. 
  Identical trees have the same layout and data at each node.  
 */

/* ------------------------- 👍 Solution ------------------------- */
const areIdentical = (root1, root2) => {
  if (!root1 && root2) return false;
  else if (root1 && !root2) return false;
  else if (!root1 && !root2) return true;
  else if (root1.val !== root2.val) return false;

  const isLeftSideSame = areIdentical(root1.leftChild, root2.leftChild);
  const isRightSideSame = areIdentical(root1.rightChild, root2.rightChild);
  return isLeftSideSame && isRightSideSame;
};
