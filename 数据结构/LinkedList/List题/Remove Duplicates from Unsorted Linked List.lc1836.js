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

var deleteDuplicatesUnsorted = function (head) {
  /*step 1: build frequency map */
  let map = new Map();
  let curr = head;
  while (curr) {
    map.set(curr.val, map.get(curr.val) + 1 || 1);
    curr = curr.next;
  }

  let dummyHead = new ListNode(-1, head);
  let prev = dummyHead;
  let cur = dummyHead.next;
  while (cur) {
    const isDupNode = map.get(cur.val) > 1;
    if (isDupNode) {
      prev.next = cur.next; //重复时就delete cur node here;
    } else {
      prev = cur; // 不重复时移动prev指针
    }

    cur = cur.next;
  }

  return dummyHead.next;
};
