/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */


// solution 1:
var getDecimalValue = function(head) {
  if(!head) return 0;

  let string = '';
  while(head){
    string += head.val
    head = head.next;
  }

  return parseInt(string, 2)
};

// solution 2:  bit operation
