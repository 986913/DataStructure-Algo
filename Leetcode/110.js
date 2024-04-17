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
 * 题目描述:
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * https://www.bilibili.com/video/BV1Ug411S7my/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
 */

/**
 ********************* Solution1: 👍👍👍 DFS分解思想 Lc104的🟡变形题 *********************
 * 二叉树节点的深度(depth)：指从根节点到该节点的最长简单路径边的条数。 求深度(depth)可以从上到下去查 所以需要pre_order前序遍历（中左右）
 * 二叉树节点的高度(height)：指从该节点到叶子节点的最长简单路径边的条数。 求高度(height)只能从下到上去查，所以只能post_order后序遍历（左右中）
 */
var isBalanced = function (root) {
  //1.确定递归函数的参数和返回值: 参数就是传入子树的根节点，返回是-1(代表子树不是平衡二叉树)OR传入子树的的高度
  const helper = (node) => {
    if (!node) return 0; //2.确定终止条件

    //3.确定单层递归的逻辑
    let leftHeight = helper(node.left);
    if (leftHeight === -1) return -1; // 当判定左子树不是平衡二叉树时,即可直接返回-1

    let rightHeight = helper(node.right);
    if (rightHeight === -1) return -1; //当判定右子树不是平衡二叉树时,即可直接返回-1

    let heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) return -1; //返回-1，说明当前子树(node)不是平衡二叉树
    else return 1 + Math.max(leftHeight, rightHeight); //返回当前子树(node)的高度
  };

  return helper(root) !== -1;
};

/*********************  Solution2: BFS, lc102的🟡变形题(没看懂❓)**********************/
var isBalanced = function (root) {
  if (!root) return true;

  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    /* 这里不再是 curLevel.push(node.val) or visited.push(node.val)了 */
    let heightDiff = Math.abs(helper(node.left) - helper(node.right));
    if (heightDiff > 1) return false;
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return true;
};
const helper = (curNode) => {
  if (!curNode) return 0;

  let queue = [curNode];
  let depth = 0;
  let res = 0;

  while (queue.length) {
    let node = queue[queue.length - 1]; // 取出栈顶
    if (node !== null) {
      queue.pop();
      queue.push(node); // 中
      queue.push(null);
      depth++;
      node.right && queue.push(node.right); // 右
      node.left && queue.push(node.left); // 左
    } else {
      queue.pop();
      node = queue[queue.length - 1];
      queue.pop();
      depth--;
    }
    res = res > depth ? res : depth;
  }
  return res;
};
