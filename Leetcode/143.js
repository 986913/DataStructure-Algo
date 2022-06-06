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

  //3. reset fast: 这时候fast就是LIST前半段了
  fast = head;
  // console.log(fast, slow)

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
