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
 * @return {number}
 */

/**********+++*** Solution1: DFS 遍历思想 + backtracking (LC112,113,129,257变形题) **************/
// main function:
var pseudoPalindromicPaths = function (root) {
  let pseudoPalindromic = [];

  const traversal = (node, curPath) => {
    if (!node) return;

    //前序位置
    curPath.push(node.val);
    if (!node.left && !node.right) {
      if (isPseudoPalindromic(curPath)) pseudoPalindromic.push(curPath); // <--- diff is here
    }
    traversal(node.left, curPath);
    traversal(node.right, curPath);
    //后序位置： backtracking
    curPath.pop();
  };

  traversal(root, []);
  return pseudoPalindromic.length;
};

// helper function:
// 如果一组数字中，只有最多一个数字出现的次数为奇数，剩余数字的出现次数均为偶数，那么这组数字可以组成一个回文串
const isPseudoPalindromic = (arr) => {
  let map = new Map();
  for (let num of arr) {
    map.set(num, map.get(num) + 1 || 1);
  }

  let oddCount = 0;
  map.forEach((val) => {
    if (val % 2 !== 0) oddCount += 1;
  });

  return oddCount <= 1;
};

/**********+++*** Solution2:  Sol1的优化版 👍👍👍 DFS 遍历思想 + backtracking  **************/
var pseudoPalindromicPaths = function (root) {
  let count = 0;

  const traverse = (node, pathCount) => {
    if (!node) return;

    //前序位置：
    pathCount[node.val] = (pathCount[node.val] || 0) + 1; // <--- diff is here
    if (!node.left && !node.right) {
      //diff is here：
      let oddCount = Object.values(pathCount).filter(
        (val) => val % 2 !== 0
      ).length;
      if (oddCount <= 1) count++; // oddCount小于等于1说明, 当前Path是条pseudo-palindromic path
    }

    traverse(node.left, { ...pathCount });
    traverse(node.right, { ...pathCount });

    //后序位置： backtracking
    pathCount[node.val] = pathCount[node.val] - 1; // <--- diff is here
  };

  traverse(root, {}); //<--- diff is here，参数是对象了。 例子中的2-3-3，对应的pathCount长这样：{ '2': 1, '3': 2 }
  return count;
};
