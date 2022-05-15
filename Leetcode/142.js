/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const findLengthOfLoop = (slow) => {
  let len = 0;
  let curr = slow;
  while (true) {
    curr = curr.next;
    len++;
    if (slow === curr) {
      break;
    }
  }

  return len;
};

const findStart = (head, cycle_length) => {
  let pointer1 = head;
  let pointer2 = head;

  if (cycle_length === 0) return null; // no loop found, return null

  // move pointer2 ahead 'cycle_length' nodes
  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length--;
  }
  // increment both pointers until they meet at the start of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
};

/* this is the main function here: */
const detectCycle = (head) => {
  let slow = head;
  let fast = head;
  let loopLen = 0;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // found a loop
      loopLen = findLengthOfLoop(slow);
      break;
    }
  }

  return findStart(head, loopLen);
};
