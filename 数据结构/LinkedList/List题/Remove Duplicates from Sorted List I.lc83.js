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

var deleteDuplicates = function (head) {
  let dummyHead = new ListNode('head', head);
  let curr = dummyHead;

  while (curr.next !== null) {
    if (curr.val === curr.next.val) {
      //if found dup, then delete node here
      curr.next = curr.next.next;
    } else {
      //if no found dup, then update curr
      curr = curr.next;
    }
  }

  return dummyHead.next;
};
