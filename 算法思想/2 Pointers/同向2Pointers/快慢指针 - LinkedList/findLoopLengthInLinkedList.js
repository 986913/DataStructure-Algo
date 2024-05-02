/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const calculate_cycle_length = (slow) => {
  let current = slow;
  let cycle_length = 0;

  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) break;
  }

  return cycle_length;
};

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return calculate_cycle_length(slow);
    }
  }
  return 0; // no loop found, return 0
};
