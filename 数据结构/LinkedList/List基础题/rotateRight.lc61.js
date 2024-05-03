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
/*------------------------ Solution --------------------------------------- */
// https://www.jiakaobo.com/leetcode/61.%20Rotate%20List.html
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let index = head;
  let len = 1;
  while (index.next) {
    index = index.next;
    len++;
  }
  index.next = head; // 关键点在这： 连起来了

  const rotateTimes = k % len;
  let moveSteps = len - rotateTimes;
  /*之所以是>1 是因为要找到前一个node：
        1 -> 2 -> 3 -> 4 -> 5
        |                   |
        <-   <-   <-   <-  <-
        
        len is 5, k is 2, moveStep is 3. 
        then below while loop will stop at moveStep === 1. which is node3. because we want return node4.
     */
  while (moveSteps > 1) {
    head = head.next;
    moveSteps--;
  }

  let result = head.next; // save node4
  head.next = null; // cut off node3

  return result;
};
