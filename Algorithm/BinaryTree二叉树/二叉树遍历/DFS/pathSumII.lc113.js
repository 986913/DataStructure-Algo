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
 * @param {number} targetSum
 * @return {number[][]}
 */

/********************** Solution1: 👍👍👍 DFS + backtracking (LC112🟡变形题) ***************************/
var pathSum = function (root, targetSum) {
  if (!root) return [];
  let result = [];

  // recursion params: node, curPath, curPathSum,  no return value
  const helper = (node, curPath, curPathSum) => {
    if (!node.left && !node.right) {
      curPath.push(node.val);
      curPathSum += node.val;
      //收集结果：
      if (curPathSum === targetSum) {
        result.push([...curPath]); // 使用副本
        return;
      }
    }

    if (node.left) {
      curPath.push(node.val);
      curPathSum += node.val;
      helper(node.left, [...curPath], curPathSum); // <--- 递归, 使用副本
      curPath.pop(); // <--- backtracking
      curPathSum -= node.val; // <--- backtracking
    }
    if (node.right) {
      curPath.push(node.val);
      curPathSum += node.val;
      helper(node.right, [...curPath], curPathSum); // <--- 递归, 使用副本
      curPath.pop(); // <--- backtracking
      curPathSum -= node.val; // <--- backtracking
    }
  };

  helper(root, [], 0);
  return result;
};
