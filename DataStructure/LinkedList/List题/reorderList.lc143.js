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

/********************** 解法2： Slow & Fast pointer:  LC 21, 234变形题 **************************************
This problem is a combination of these three easy problems:
  Find a middle node of the linked list. If there are two middle nodes, return the second middle node. 
    (Example: for the list 1->2->3->4->5->6, the middle element is 4.)
  Once a middle node has been found, reverse the second part of the list. 
    (Example: convert 1->2->3->4->5->6 into 1->2->3->4 and 6->5->4.)
  Now merge the two sorted lists. 
    (Example: merge 1->2->3->4 and 6->5->4 into 1->6->2->5->3->4.)
 */
var reorderList = function (head) {
  let midNode = getMid(head); //1.find the middle node
  let reversed = reverse(midNode.next); // reverse the second part of the list: reversed

  /* break list here: now 1->2->3->4->5 list break into two part: 
        head:     1->2->3
        reversed: 5->4
    */
  midNode.next = null;

  let dummyHead = new ListNode(-1, head);
  // loop后半段reversed:
  while (reversed) {
    // 暂存下
    let tmp1 = head.next;
    let tmp2 = reversed.next;

    //开始实际改变指针方向:
    head.next = reversed;
    reversed.next = tmp1;

    head = tmp1; // update前半段
    reversed = tmp2; // update后半段
  }

  return dummyHead.next;
};

// helper function :
const getMid = (head) => {
  let dummyHead = new ListNode(-1, head);

  let slow = dummyHead;
  let fast = dummyHead;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
// helper function :
const reverse = (head) => {
  let prev = null;
  let curr = head;
  let next = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
