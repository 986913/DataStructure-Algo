/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, left, right) {
  /*reverse 套路四步走需要的3指针*/
  let prev = null;
  let curr = head;
  let next = head;

  //for loop until to left
  for (let i = 1; i < left; i++) {
    prev = curr;
    curr = curr.next;
  }

  let prev2 = prev; //占位而已
  let curr2 = curr; //占位而已

  //在这开始reverse -- 四步走
  for (let i = left; i <= right; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  //利用之前占位的2个指针，重指向.next
  if (prev2 !== null) {
    prev2.next = prev;
  } else {
    head = prev;
  }
  curr2.next = curr;

  return head;
};
