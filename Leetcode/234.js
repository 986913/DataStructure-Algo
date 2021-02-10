/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function(head) {
  let normalOrder = '';
  let reverseOrder = '';

  while(head){
      normalOrder = normalOrder + head.val;
      reverseOrder = head.val + reverseOrder;
      head = head.next;   
  }
  return normalOrder == reverseOrder
};