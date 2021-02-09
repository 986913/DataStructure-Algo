/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// https://www.youtube.com/watch?v=DpjpPo5SpgY&t=297s&ab_channel=%E8%80%81%E6%AF%95JS

var getIntersectionNode = function(headA, headB) {
  let n1 = headA;
  let n2 = headB;
    while(n1 !== n2){
      if(!n1) n1 = headB;
      else n1= n1.next;

      if(!n2) n2 = headA;
      else n2 = n2.next;
    }
    return n1;
};