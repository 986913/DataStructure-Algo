/**
 * Definition for a binary tree node.
 * function TreeNode(val, p1, p2) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.p1 = (p1===undefined ? null : p1)
 *     this.p2 = (p2===undefined ? null : p2)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

/*************************** Solution1:  穷举 + DFS分解思想 *****************************
  通过穷举根节点的值，然后递归构造左右子树的所有可能的组合来生成不同的BST
*/

var generateTrees = function (n) {
  if (n === 0) return [];

  // 构造闭区间 [1, n] 组成的 BST
  return build(1, n);
};

/**
 * @param {number} lo
 * @param {number} hi
 * @return {TreeNode[]}
 */
var build = function (lo, hi) {
  var res = [];
  // base case
  if (lo > hi) {
    // 这里需要装一个 null 元素，这样才能让下面的两个内层 for 循环都能进入，正确地创建出叶子节点
    // 举例来说吧，什么时候会进到这个 if 语句？当你创建叶子节点的时候，对吧。
    // 那么如果你这里不加 null，直接返回空列表，那么下面的内层两个 for 循环都无法进入
    // 你的那个叶子节点就没有创建出来，看到了吗？所以这里要加一个 null，确保下面能把叶子节点做出来
    res.push(null);
    return res;
  }

  // 1、穷举 root 节点的所有可能。
  for (var i = lo; i <= hi; i++) {
    // 2、递归构造出左右子树的所有有效 BST。
    var leftTree = build(lo, i - 1);
    var rightTree = build(i + 1, hi);

    // 3、给 root 节点穷举所有左右子树的组合。
    for (var p1 = 0; p1 < leftTree.length; p1++) {
      for (var p2 = 0; p2 < rightTree.length; p2++) {
        // i 作为根节点 root 的值
        var root = new TreeNode(i);
        root.left = leftTree[p1];
        root.right = rightTree[p2];

        res.push(root);
      }
    }
  }

  return res;
};
