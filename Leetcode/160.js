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
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法1： Brute force 不推荐🙅🏻‍♀️
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
/*方法2：👍👍👍 分段双指针！！！

    根据快慢法则，走的快的一定会追上走得慢的。
      在这道题里，有的链表短，他走完了就去走另一条链表，我们可以理解为走的快的指针。
      那么，只要其中一个链表走完了，就去走另一条链表的路。如果有交点，他们最终一定会在同一个位置相遇
*/

var getIntersectionNode = function (headA, headB) {
  let n1 = headA;
  let n2 = headB;

  while (n1 !== n2) {
    if (!n1) n1 = headB; //当n1走完headA链表后，那么就切换到headB链表走
    else n1 = n1.next;

    if (!n2) n2 = headA; //同理，当n2走完headB链表后，那么就切换到headA链表走
    else n2 = n2.next;
  }
  return n1;
};
