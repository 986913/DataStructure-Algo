/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* -----------------------  👍👍👍 双指针 四步走 + Recursion ----------------------- */
var reverseKGroup = function (head, k) {
  let curr = head; // Create a pointer which will traverse the head
  let count = 0; // Create a counter to determine how many nodes we have traversed

  // Loop until we find either the end of the LinkedList, or the k + 1 node
  while (curr != null && count != k) {
    curr = curr.next;
    count++;
  }

  // If we have found the k + 1 node
  if (count == k) {
    // Attempt to reverse the next k nodes (will return the value of curr if not enough nodes)
    curr = reverseKGroup(curr, k); // reverse list with k+1 node as head

    // Loop through the number of nodes in this group
    while (count > 0) {
      // reverse
      let next = head.next;
      head.next = curr;
      curr = head;
      head = next;

      count--;
    }

    // Swap the current head for the reversed one
    head = curr;
  }
  return head;
};
