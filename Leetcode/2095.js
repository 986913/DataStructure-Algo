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

var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;

  let newShangBanDuan = new ListNode(-1); // newShangBanDuan是记住前半段 before middle node
  let curr = newShangBanDuan; // curr最后会是newShangBanDuan最后的一个node

  while (fast && fast.next) {
    /* maintance  newShangBanDuan here */
    let newnode = new ListNode(slow.val, null);
    curr.next = newnode;
    curr = curr.next;

    slow = slow.next;
    fast = fast.next.next;
  }

  slow = slow.next;
  curr.next = slow; // connect newShangBanDuan 和 下半段(SLOW) HERE

  return newShangBanDuan.next; //这是最终生成的new list
};
