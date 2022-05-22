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
//https://www.youtube.com/watch?v=PdA1uRRL40M&ab_channel=%E5%8C%97%E7%BE%8E%E7%94%9F%E6%B4%BB%E8%AF%B4
var oddEvenList = function (head) {
  if (!head) return null;

  let odd = head; // 相当于odd list
  let even = head.next; //相当于even list
  let evenHead = even; //even list的头儿

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = even; //在这把odd list的尾和even list的头儿街上
  return head;
};
