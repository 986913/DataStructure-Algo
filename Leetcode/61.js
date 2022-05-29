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

const rotateRightByIndex = (index, head, length) => {
  let count = 0;
  let rest = head;
  while (count !== index) {
    count++;
    rest = rest.next;
  }

  let count2 = 0;
  let curr2 = head;
  while (count2 !== index) {
    if (count2 === index - 1) {
      curr2.next = null;
    }
    count2++;
    curr2 = curr2.next;
  }

  // console.log(rest, head) // rest 是 Index之后的， head是INDEx之前的
  let tmp = rest;
  let connacted = false;
  while (tmp && !connacted) {
    if (!tmp.next) {
      tmp.next = head;
      connacted = true;
    }
    tmp = tmp.next;
  }

  return rest;
};

var rotateRight = function (head, k) {
  if (!head) return null;

  const length = lenOfList(head);
  if (k % length == 0) return head;

  if (k < length) {
    return rotateRightByIndex(length - k, head, length);
  } else {
    let reminder = k % length;
    return rotateRightByIndex(length - reminder, head, length);
  }
};
