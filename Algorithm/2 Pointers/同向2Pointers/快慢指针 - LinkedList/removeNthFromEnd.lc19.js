/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*--------------------------- Solution 1: 👍👍👍 Fast & Slow pointer -------------------- */
var removeNthFromEnd = function (head, n) {
  let dummyhead = new ListNode(-1, head);

  let slow = dummyhead;
  let fast = dummyhead;

  //先让fast走n+1步
  while (n >= 0) {
    fast = fast.next;
    n--;
  }

  //再同时让slow fast走, 直到fast===null
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // actually delete (slow.next) here
  slow.next = slow.next.next;

  //return 删除节点后的list
  return dummyhead.next;
};
