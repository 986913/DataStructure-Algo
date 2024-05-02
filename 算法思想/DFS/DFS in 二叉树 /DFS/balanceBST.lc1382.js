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
 * @return {TreeNode}
 */

/******************* Solution: DFS Recursion - 先生成inOrderArr,在根据其生成BST (LC 94 + LC108) *************************/
var balanceBST = function (root) {
  const inOrderArr = [];

  const traverse = (node) => {
    if (!node) return;

    traverse(node.left);
    inOrderArr.push(node.val);
    traverse(node.right);
  };

  traverse(root);
  return constructBstFromSortedArr(inOrderArr);
};

// helper function ----> same as LC 108
const constructBstFromSortedArr = (nums) => {
  const helper = (arr) => {
    if (arr.length === 0) return null;

    let midIndex = Math.floor(arr.length / 2);
    let midNode = new TreeNode(arr[midIndex]);
    midNode.left = helper(arr.slice(0, midIndex));
    midNode.right = helper(arr.slice(midIndex + 1));
    return midNode;
  };
  return helper(nums);
};
