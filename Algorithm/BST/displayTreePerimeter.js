/**
  Given the root node of a binary tree, print the nodes that form the boundary (perimeter).
  In the following tree, the highlighted nodes form the perimeter:
                      100
                      / \
                    50   200
                    /\     \
                  25  60   350
                  /    \     \
                10     70    400
  The expected output for the below tree would be : 100,50,25,10,70,400,350,200
 */

/* --------------------- Solution: Recursion ----------------------- */
// main function:
const displayTreePerimeter = (root) => {
  const result = [];

  if (root != null) {
    result.push(root.data);

    printLeftPerimeter(root.left, result);
    // Print all leaf nodes
    printLeafNodes(root.left, result);
    printLeafNodes(root.right, result);
    printRightPerimeter(root.right, result);
  }

  return result.join(' ');
};

// helper functions:
const printLeftPerimeter = (node, result) => {
  if (node) {
    if (node.left) {
      result.push(node.data);
      printLeftPerimeter(node.left, result);
    } else if (node.right) {
      result.push(node.data);
      printLeftPerimeter(node.right, result);
    }
  }
};
const printRightPerimeter = (node, result) => {
  if (node) {
    if (node.right) {
      printRightPerimeter(node.right, result);
      result.push(node.data);
    } else if (node.left) {
      printRightPerimeter(node.left, result);
      result.push(node.data);
    }
  }
};
const printLeafNodes = (node, result) => {
  if (node) {
    printLeafNodes(node.left, result);
    // Print this node if it is a leaf node
    if (node.left == null && node.right == null) result.push(node.data);
    printLeafNodes(node.right, result);
  }
};
