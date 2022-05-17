/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  // find the length of linked list
  const len = findLenOfLinkedList(head);

  if (len - n === 0 && len === 1) return null; //edge case

  // then get the len-n th node, then remove that node
  return findThenDeleteNode(len - n, head, len);
};

const findLenOfLinkedList = (head) => {
  let len = 0;
  let curr = head;

  while (curr) {
    len++;
    curr = curr.next;
  }

  return len;
};
const findThenDeleteNode = (index, head, len) => {
  let count = 0;
  let curr = head;
  let prev = null;

  if (index === 0 && len > 1) {
    //当remove index=0的节点时
    head = curr.next;
    return head;
  } else {
    while (count !== index) {
      //当remove index>1的节点时
      prev = curr;
      count++;
      curr = curr.next;
    }
    // console.log(curr);  // curr就是在index上的Node
    prev.next = curr.next;
    return head;
  }
};
