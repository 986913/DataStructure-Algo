/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(-1);
  let tail = dummyNode;

  let carry = 0;

  while (l1 || l2 || carry) {
    let currSum = 0;

    if (l1) {
      currSum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      currSum += l2.val;
      l2 = l2.next;
    }
    currSum += carry;

    let reminder = currSum % 10;
    tail.next = new ListNode(reminder);
    tail = tail.next;

    carry = currSum >= 10 ? 1 : 0;
  }

  return dummyNode.next;
};
