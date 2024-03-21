/**
  Implement the findAncestors(root, k) function which will find the ancestors of the node whose value is “k”. 
  Here root is the root node of a binary search tree and k is an integer value of a node whose ancestors you need to find.
  An illustration is also given. Your code is evaluated on the tree given in the example.
 */

/* --------------------- Solution: Itelartion (类似lc700 Itelartion解法🟡的变形题) ----------------------- */
function findAllAncestors(root, k) {
  let parents = [];

  while (root) {
    if (root.val < k) {
      parents.push(root.val);
      root = root.rightChild;
    } else if (root.val > k) {
      parents.push(root.val);
      root = root.leftChild;
    } else {
      return parents.reverse();
    }
  }
}

/* --------------------- Solution: Recursion ----------------------- */
/* This solution uses a recursive helper function which traverses from the root to the input node 
  and backtracks to append the ancestors that led to the node. */
function findAllAncestors(root, k) {
  const result = [];
  recfindAncestors(root, k, result);
  return result;
}

function recfindAncestors(root, k, result) {
  if (root == null) return false;
  else if (root.val == k) return true;
  else if (
    recfindAncestors(root.leftChild, k, result) ||
    recfindAncestors(root.rightChild, k, result)
  ) {
    result.push(root.val);
    return true;
  }

  return false;
}
