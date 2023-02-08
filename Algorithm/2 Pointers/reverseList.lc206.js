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

// https://www.youtube.com/watch?v=aBEm9ByKzBo&ab_channel=%E8%80%81%E6%AF%95JS

// ----------------------- 1. 👍👍👍  双指针法： 四步走 -----------------------
const reverseList = (head) => {
  if (!head || !head.next) return head;

  let prev = null;
  let curr = head;
  let next = head; //next就是临时指针

  while (curr) {
    next = curr.next; //1.用这个next临时指针存current.next值
    curr.next = prev; //2.实际改变curr指向
    prev = curr; //3. 改变指向后，移动prev
    curr = next; //4. 改变指向后，移动curr
  }
  return prev; //返回翻转后指针head
};
