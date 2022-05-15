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
/*方法2： 分段双指针！！！ */
var getIntersectionNode = function (headA, headB) {
  let n1 = headA;
  let n2 = headB;
  while (n1 !== n2) {
    if (!n1) n1 = headB; //当n1走完headA链表后，把n1指到headB链表上
    else n1 = n1.next;

    if (!n2) n2 = headA; //当n2走完headB链表后，把n2指到headA链表上
    else n2 = n2.next;
  }
  return n1;
};
