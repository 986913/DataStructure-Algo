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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */


// PreOrder DFS solutions:
var rangeSumBST = function(root, low, high) {
  let sum = 0;

  const helper = (helperInput) => {
    if(helperInput.val<=high && helperInput.val>=low){
      sum+=helperInput.val
    }
    
    if(helperInput.left) helper(helperInput.left);
    if(helperInput.right) helper(helperInput.right);
  }
  
  helper(root);
  return sum
};