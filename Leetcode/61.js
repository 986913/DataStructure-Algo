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

const lenOfList = (head) => {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
};

const getListAfterIndex = (index, head) => {
  let count = 0;
  let curr = head;
  while (count !== index) {
    count++;
    curr = curr.next;
  }
  return curr;
};

const getListBeforeIndex = (index, head) => {
  let count = 0;
  let curr = head;
  while (count !== index) {
    if (count === index - 1) {
      curr.next = null;
    }
    count++;
    curr = curr.next;
  }
  return head;
};

const rotateRightByIndex = (index, head) => {
  const listA = getListAfterIndex(index, head);
  const listB = getListBeforeIndex(index, head);

  let tmp = listA;
  let connacted = false;
  while (tmp && !connacted) {
    if (!tmp.next) {
      tmp.next = listB;
      connacted = true;
    }
    tmp = tmp.next;
  }
  return listA;
};

var rotateRight = function (head, k) {
  if (!head) return null;

  const length = lenOfList(head);
  if (k % length == 0) return head;

  if (k < length) return rotateRightByIndex(length - k, head);
  else {
    let reminder = k % length;
    return rotateRightByIndex(length - reminder, head);
  }
};
