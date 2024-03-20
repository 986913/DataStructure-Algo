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
 * @return {boolean}
 */

/***************** Solution1: 👍👍👍 DFS PostOrder + backtracking **********************************/
// https://www.bilibili.com/video/BV19t4y1L7CR/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  //1. 确定递归函数 函数参数:树的根节点,和 currPathSum, 返回值boolean
  const helper = (node, currPathSum) => {
    //2. 确定终止条件，到叶子节点就终止.
    if (!node.left && !node.right) {
      currPathSum += node.val; // update currPathSum
      return currPathSum === targetSum; // 遇到叶子节点,如果currPathSum===targetSum 说明找到了目标和,s直接返回true, 反之亦然
    }

    //3. 确定单层递归逻辑
    //左
    if (node.left) {
      currPathSum += node.val;
      if (helper(node.left, currPathSum)) return true; // <--- 递归, 递归函数是有返回值的，如果递归函数返回true，说明找到了合适的路径，应该立刻返回
      currPathSum -= node.val; // <--- backtracking
    }
    //右
    if (node.right) {
      currPathSum += node.val;
      if (helper(node.right, currPathSum)) return true; // <--- 递归, 递归函数是有返回值的，如果递归函数返回true，说明找到了合适的路径，应该立刻返回
      currPathSum -= node.val; // <--- backtracking
    }
    //中: 当节点的左右子树都没找到目标值时，直接return false
    return false;
  };
  return helper(root, 0);
};

/****************** Solution2.1: 👍👍 DFS PreOrder (LC257 Sol1🟡变形题) ******************/
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let allPathSums = [];

  //1. 确定递归函数 函数参数:树的根节点 和 当前的每一条path上所有节点的总和: currPathSum, 无返回值
  const helper = (node, currPathSum) => {
    //2. 确定终止条件，到叶子节点就终止. 更新currPathSum, allPathSums
    if (!node.left && !node.right) {
      currPathSum += node.val;
      allPathSums.push(currPathSum);
      return;
    }

    //3. 确定单层递归逻辑
    currPathSum += node.val; // 中
    if (node.left) helper(node.left, currPathSum); // 左
    if (node.right) helper(node.right, currPathSum); // 右
  };

  helper(root, 0);
  return allPathSums.includes(targetSum);
};

/****************** Solution2.2: 👍 DFS PreOrder + backtracking (LC257 Sol2🟡变形题) ******************/
// 和上述的Solution2.1几乎一样，就是更明显的显示backtracking过程而已
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let allPathSum = [];

  const helper = (node, curPathSum) => {
    if (!node.left && !node.right) {
      curPathSum += node.val;
      allPathSum.push(curPathSum);
      return;
    }

    if (node.left) {
      curPathSum += node.val;
      helper(node.left, curPathSum); // <--- 递归
      curPathSum -= node.val; // <--- backtracking
    }
    if (node.right) {
      curPathSum += node.val;
      helper(node.right, curPathSum); // <--- 递归
      curPathSum -= node.val; // <--- backtracking
    }
  };
  helper(root, 0);
  return allPathSum.includes(targetSum);
};
