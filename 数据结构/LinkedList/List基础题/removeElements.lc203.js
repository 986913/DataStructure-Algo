/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/****************************** 解法1 **********************************/
var removeElements = function (head, val) {
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      curr = curr.next;
      head = curr;
    } else if (curr.next && curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
/****************************** 解法2: 👍👍👍 (dummy head的使用) **********************************/
var removeElements = function (head, val) {
  /* 和下面类似的效果 
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;
  */
  let dummyHead = new ListNode(-1, head);

  let current = dummyHead;
  // 注意是curren.next
  while (current.next != null) {
    if (current.next.val === val)
      current.next = current.next.next; // delete here
    else current = current.next;
  }
  return dummyHead.next;
};
