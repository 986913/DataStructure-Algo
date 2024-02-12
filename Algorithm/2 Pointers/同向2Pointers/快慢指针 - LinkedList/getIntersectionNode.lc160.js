/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 *************************************方法1:Brute force 不推荐🙅🏻‍♀️**************************************
 */
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    let node = headB;
    while (node) {
      if (headA === node) return headA;
      node = node.next;
    }
    headA = headA.next;
  }

  return null;
};

// https://www.youtube.com/watch?v=DpjpPo5SpgY&t=297s&ab_channel=%E8%80%81%E6%AF%95JS
/*************************************方法2：👍👍👍 分段双指针！！！**************************************

    根据快慢法则，走的快的一定会追上走得慢的。
      在这道题里，有的链表短，他走完了就去走另一条链表，我们可以理解为走的快的指针。
      那么，只要其中一个链表走完了，就去走另一条链表的路。如果有交点，他们最终一定会在同一个位置相遇
*/

var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    if (p1 == null) {
      p1 = headB;
    } //当p1走完headA链表后，那么就切换到headB链表走
    else {
      p1 = p1.next;
    }

    if (p2 == null) {
      p2 = headA;
    } //同理，当p2走完headB链表后，那么就切换到headA链表走
    else {
      p2 = p2.next;
    }
  }

  return p1; // 如果有相交的点就返回相交的点， 没有相交的点就返回null
};
