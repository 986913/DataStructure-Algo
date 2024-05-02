/**
  Given the root of a binary tree, delete any subtrees whose nodes sum up to zero. 
  In the below binary tree, we need to delete the subtree starting at node 5 as it's sum (5-3-2) equals 0
            7
          /  \
        5     6
      /  \
    -3   -2
  
  the return should be :
              7
                \
                  6
 */

/* -------------------------- Code Solution: DFS Post-order------------------------------ */
let deleteZeroSumSubtree = function (root) {
  const helper = (node) => {
    if (!node) return 0;

    const sumLeft = helper(node.left);
    const sumRight = helper(node.right);
    // delete node here
    if (sumRight === 0) node.right = null;
    if (sumLeft === 0) node.left = null;
    // single layer recurrsion:
    return sumLeft + sumRight + node.val;
  };

  helper(root);
  return root;
};
