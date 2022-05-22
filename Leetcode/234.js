/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//解法1：不推荐🙅🏻‍♀️，
var isPalindrome = function (head) {
  let normalOrder = '';
  let reverseOrder = '';

  while (head) {
    normalOrder = normalOrder + head.val;
    reverseOrder = head.val + reverseOrder;
    head = head.next;
  }
  return normalOrder == reverseOrder;
};

//解法2： Slow & Fast pointer
// https://leetcode.cn/problems/palindrome-linked-list/solution/tu-jie-kuai-man-zhi-zhen-pan-duan-hui-we-huhu/
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  let node = head; //用来记录翻转后的前半段
  let nullnode = null;

  while (fast && fast.next) {
    node = slow;

    slow = slow.next; //slow pointer 每走1步
    fast = fast.next.next; //fast pointer 每走2步

    node.next = nullnode;
    nullnode = node;
  }

  if (fast) {
    // edge case.
    slow = slow.next;
  }

  //console.log(node, slow); // node就是翻转后的前半段， slow是后半段

  //在这比较前半段和后半段一样不
  while (node && slow) {
    if (node.val !== slow.val) return false;

    node = node.next;
    slow = slow.next;
  }

  return true;
};
