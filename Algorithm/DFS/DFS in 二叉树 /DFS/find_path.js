/**
  Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
  
  example1:   sequence: [1,9,9]  return true
                    1
                  /  \
                7     9
                    /   \
                  2      9

  example2:   sequence: [1,0,7]  return true;
              sequence: [1,1,6]  return false;
                    1
                  /  \
                0     1
              /     /   \
            1      6     5
 */

/***************************** Solution: DFS POST-order *****************************************************************/
const find_path = function (root, sequence) {
  if (root === null) return sequence.length === 0;

  const helper = (node, pathArr, index) => {
    const len = pathArr.length;
    if (node === null) return false;
    /*  情况1: 路径序列pathArr已经被完全匹配，但是当前节点node还有子节点
        情况2: 当前节点node的值与路径序列pathArr中相应索引位置的值相匹配
        这两个都不符合路径结束的条件, so return false for them both.
    */
    if (index >= len || node.val !== pathArr[index]) return false;
    // if the current node is a leaf, add it is the end of the pathArr, we have found a path!
    if (node.left === null && node.right === null && index === len - 1)
      return true;

    // recursively call to traverse the left and right sub-tree, return true if any of the two recursive call return true
    const isLeftSubTreeHasSequence = helper(node.left, pathArr, index + 1);
    const isRightSubTreeHasSequence = helper(node.right, pathArr, index + 1);
    return isLeftSubTreeHasSequence || isRightSubTreeHasSequence;
  };

  return helper(root, sequence, 0);
};
