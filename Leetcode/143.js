/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
/**
This problem is a combination of these three easy problems:
  Middle of the Linked List.
  Reverse Linked List.
  Merge Two Sorted Lists.
  -------------------------------------------------------------------
  Find a middle node of the linked list. If there are two middle nodes, return the second middle node. 
    (Example: for the list 1->2->3->4->5->6, the middle element is 4.)
  Once a middle node has been found, reverse the second part of the list. 
    (Example: convert 1->2->3->4->5->6 into 1->2->3->4 and 6->5->4.)
  Now merge the two sorted lists. 
    (Example: merge 1->2->3->4 and 6->5->4 into 1->6->2->5->3->4.)
 */

const reverse = (head) => {
  let prev = null;
  let next = head;
  let curr = head;
  while (next) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

var reorderList = function (head) {
  let slow = head;
  let fast = head;

  //1.find the middle node: slow,
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //2.reverse the second part of the list: slow
  slow = reverse(slow);

  //3. reset fast: 这时候fast就是list前半段了
  fast = head;

  //4. mergege fast and slow into a one
  while (slow.next !== null) {
    let ptr1 = fast.next; //helper pointer for the normal half
    let ptr2 = slow.next; //helper pointer for the reversed half
    // console.log(ptr1, ptr2);

    fast.next = slow;
    slow.next = ptr1;

    fast = ptr1;
    slow = ptr2;
  }
};
