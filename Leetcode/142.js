/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  https://www.bilibili.com/video/BV1if4y1d7ob/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // detect Cycle: fast和slow指针相遇了
    if (fast == slow) {
      slow = head; // fast保持原地，让slow到head的位置， 开始新的move

      //当他们再次相遇时 就是环形入口处
      while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }

  return null;
};
