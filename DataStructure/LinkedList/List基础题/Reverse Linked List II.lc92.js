/* -----------------------  👍👍👍  双指针法： 四步走 ----------------------- */

var reverseBetween = function (head, left, right) {
  let dummyHead = new ListNode(-1, head);
  let prev = dummyHead;
  // Move prev to the node just before the left position
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let curr = prev.next;
  for (let i = left; i < right; i++) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next; // Correct the next pointer of 'next'
    prev.next = next; // Update prev's next pointer to 'next'
  }

  return dummyHead.next;
};
