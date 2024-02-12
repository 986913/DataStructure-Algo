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

/****************************************** 解法1：不推荐🙅🏻‍♀️ ******************************************/
var isPalindrome = function (head) {
  let leftToRight = '';
  let rightToLeft = '';

  while (head) {
    leftToRight = head.val + leftToRight;
    rightToLeft = rightToLeft + head.val;

    head = head.next;
  }

  return leftToRight === rightToLeft;
};

/*********************************** 解法2： Slow & Fast pointer **************************************/
// https://www.jiakaobo.com/leetcode/234.%20Palindrome%20Linked%20List.html
var isPalindrome = function (head) {
  let mid = getMid(head);
  let midNext = reverse(mid.next); //翻转Mid之后的list为midNext

  //遍历翻转后的后半段， 然后一一比较后半段和前半段，值不一样就false
  while (midNext) {
    if (midNext.val !== head.val) return false;

    head = head.next;
    midNext = midNext.next;
  }

  return true;
};

// helper function 1:
const getMid = (head) => {
  let dummyhead = new ListNode(-1, head);
  let slow = dummyhead;
  let fast = dummyhead;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
// helper function 2:
const reverse = (head) => {
  let prev = null;
  let curr = head;
  let next = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
