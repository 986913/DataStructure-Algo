/**
  Convert an N-ary tree to a Binary tree and then convert the Binary tree back to its original N-ary tree structure. 
  Consider the following N-ary tree:
                        1
                      / | \
                    2   3  4
                      /  \
                    5     6
  There are several ways of representing this N-ary tree as a binary tree with and without extra metadata. 
  Look at the below converted binary trees that don’t require any extra metadata storage (see if you get any clues).
    Possible Binary Tree Representation1:
                        1  
                      /
                    2
                  /
                3
              / \
            4    5
                  \
                    6
    Possible Binary Tree Representation2:
                        1
                          \
                            2
                              \
                                3
                                / \
                              5    4
                            /
                          6
 */

/* ------------------------ Solution------------------------------*/
const convertN_aryToBinary = function (root) {
  const helper = (node, isLeft) => {
    if (!node) return;

    let btnode = new BinaryTreeNode(node.data);
    let lastnode = btnode;

    for (let c in node.children) {
      if (isLeft === 1) {
        lastnode.left = helper(node.children[c], 0);
        lastnode = lastnode.left;
      } else {
        lastnode.right = helper(node.children[c], 1);
        lastnode = lastnode.right;
      }
    }
    return btnode;
  };

  return helper(root, 1);
};

const convertBinaryToN_ary = function (root) {
  const helper = (node, isLeft) => {
    if (!node) return;

    let nnode = new BinaryTreeNode(node.data);
    let temp = node;

    if (isLeft === 1) {
      while (temp.left) {
        let child = helper(temp.left, 0);
        nnode.children.push(child);
        temp = temp.left;
      }
    } else {
      while (temp.right) {
        let child = helper(temp.right, 1);
        nnode.children.push(child);
        temp = temp.right;
      }
    }
    return nnode;
  };

  return helper(root, 1);
};

// https://www.educative.io/module/page/pg03nJFvg2PyAP10v/6603863160782848/6095268595892224/5013709755252736
