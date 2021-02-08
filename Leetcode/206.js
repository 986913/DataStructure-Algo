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

 // https://www.youtube.com/watch?v=aBEm9ByKzBo&ab_channel=%E8%80%81%E6%AF%95JS

 // 1.  迭代法 四步走
var reverseList = function(head) {
  let current = head;
  let next = head;
  let prev = null;
  while(current){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// 递归
