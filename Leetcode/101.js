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
 * @return {boolean}
 */

/**
 *
 * 什么样的题目一定要使用post order遍历？
 *  - 需要收集孩子的信息，向上一层返回的题目 比如下面这个题
 */

//https://www.bilibili.com/video/BV1ue4y1Y7Mf/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

//solution1:  使用递归遍历左右子树 递归三部曲 （这道题只能 post_order:左右中）
var isSymmetric = function (root) {
  // 1. 确定递归的参数 root.left root.right和返回值true false：  就是判断两个二叉树镜面反转后是否一样 （分别以left和right为root的两个二叉树）
  const compareNode = (left, right) => {
    //2. 确定终止条件 空的情况
    if (left === null && right !== null) return false;
    else if (left !== null && right === null) return false;
    else if (left === null && right === null) return true;
    else if (left.val !== right.val) return false;
    //3. 当left.val==-right.val, 确定单层递归逻辑:
    let outside = compareNode(left.left, right.right); // 左/右
    let inside = compareNode(left.right, right.left); // 右/左
    let result = outside && inside; //中
    return result;
  };

  return compareNode(root.left, root.right);
};
