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

/**************************** Merge sort in Single Linked List **************************************/
var sortList = function (head) {
  if (!head || !head.next) return head;

  // Split the linked list into two halves
  let [left, right] = split(head);

  // Recursively sort both halves
  left = sortList(left);
  right = sortList(right);

  // Merge the sorted halves
  return mergeLinkedList(left, right);
};

// Helper function 1: Split linked list into two halves
const split = (head) => {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const left = head;
  const right = slow.next;
  slow.next = null; // Break the link between the halves

  return [left, right];
};

// Helper function2: Merge two sorted linked lists
const mergeLinkedList = (left, right) => {
  const dummyHead = new ListNode();
  let current = dummyHead;

  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }

    current = current.next;
  }

  // Attach the remaining nodes of either list, if any
  current.next = left || right;

  return dummyHead.next;
};
