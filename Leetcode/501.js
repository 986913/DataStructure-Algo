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
 * @return {number[]}
 */

//------------------👍 Solution 1: dfs inorder to create visited map, then find the most high frequency of that map -------------
var findMode = function (root) {
  const map = new Map();

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    map.set(node.val, map.get(node.val) + 1 || 1);
    if (node.right) helper(node.right);
  };
  helper(root);

  let maxCount = map.get(root.val);
  let result = [];
  for (let [key, value] of map) {
    if (value === maxCount) {
      result.push(key);
    }
    if (value > maxCount) {
      result = [];
      maxCount = value;
      result.push(key);
    }
  }

  return result;
};

//-----------------------------👍👍 Solution 2: dfs inorder, but no need to create map! ----------------------
var findMode = function (root) {
  let result = [];
  let pre = null;
  let count = 0; // 记录单个元素出现的频率
  let maxCount = 1; // 记录整个树中某元素出现的最大频率

  const helper = (node) => {
    if (!node) return;

    helper(node.left);

    if (!pre) count = 1;
    else if (pre && node.val === pre.val) count++;
    else count = 1;
    pre = node;
    if (count === maxCount) {
      result.push(node.val);
    } else if (count > maxCount) {
      maxCount = count;
      result = [];
      result.push(node.val);
    }

    helper(node.right);
  };

  helper(root);
  return result;
};
