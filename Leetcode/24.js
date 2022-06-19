// https://leetcode.cn/problems/swap-nodes-in-pairs/solution/shou-hua-tu-jie-24-liang-liang-jiao-huan-lian-biao/

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
var swapPairs = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;

  let prev = dummy;

  while (head && head.next) {
    const next = head.next;

    head.next = head.next.next;
    next.next = head;
    prev.next = next;

    prev = head;
    head = head.next;
  }

  return dummy.next;
};
