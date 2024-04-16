/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

/*********************** Solution: 分段双指针 和LC60解法一样 *************************/
var lowestCommonAncestor = function (p, q) {
  let p1 = p;
  let p2 = q;

  while (p1 !== p2) {
    if (p1 === null) {
      p1 = q;
    } else {
      p1 = p1.parent;
    }

    if (p2 === null) {
      p2 = p;
    } else {
      p2 = p2.parent;
    }
  }

  return p1;
};
