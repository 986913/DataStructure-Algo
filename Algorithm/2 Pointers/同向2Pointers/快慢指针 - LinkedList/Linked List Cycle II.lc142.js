/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  https://www.bilibili.com/video/BV1if4y1d7ob/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
// https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#%E6%80%9D%E8%B7%AF
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* --------------- 👍👍👍 2 pointers:  --------------- */
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  /* 1. 先用slow，fast指针判断list有没有环 */
  while (fast && fast.next) {
    slow = slow.next; // slow每移动1步
    fast = fast.next.next; // fast每移动2步

    /* 2. fast和slow指针相遇了（相遇点），说明有环, 
    重点在这：接下来进行第2步：得出环入口处 */
    if (fast === slow) {
      slow = head; //fast保持原地，让slow到head的位置 开始新的move

      //当他们再次相遇时 就是环形入口处
      while (fast !== slow) {
        slow = slow.next; // slow每移动1步
        fast = fast.next; // fast每移动1步
      }

      return slow;
    }
  }

  return null; //没环直接返回null
};
