/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/****************************** Solution **************************************/
var oddEvenList = function (head) {
  if (!head) return null;

  let odd = head; // 相当于odd list
  let even = head.next; //相当于even list
  let evenHead = even; //even list的头儿

  // 因为even总是在odd之后，所以用even做判断
  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next; // move odd
    even = even.next; // move even
  }

  odd.next = evenHead; //在这把odd list的尾和even list的头儿街上

  return head;
};
