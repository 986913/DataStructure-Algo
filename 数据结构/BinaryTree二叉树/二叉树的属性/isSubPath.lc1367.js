/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
/********************* Solution: DFS 分解思想 - LC572, LC100 变形题 *********************/
var isSubPath = function (head, root) {
  if (!root) return false;
  if (isSame(head, root)) return true;

  const isSubPathOnLeft = isSubPath(head, root.left);
  const isSubPathOnRight = isSubPath(head, root.right);
  return isSubPathOnLeft || isSubPathOnRight;
};

// helper function:
const isSame = (head, node) => {
  if (!head) return true; // <--diff is here
  if (!node) return false;
  if (head.val !== node.val) return false;

  const isSameOnLeft = isSame(head.next, node.left); // <--diff is here: head.next, 因为head是链表啦
  const isSameOnRight = isSame(head.next, node.right); // <--diff is here: head.next, 因为head是链表啦
  return isSameOnLeft || isSameOnRight;
};
