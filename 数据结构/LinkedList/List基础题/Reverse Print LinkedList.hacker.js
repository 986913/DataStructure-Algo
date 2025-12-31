/**
 * Problem Statement:
 * Given the head of a singly linked list, print the elements in reverse order.
 * You must not modify the original linked list.
 *
 * Example 1:
 *   head = 1 -> 2 -> 3 -> null
 *   Output: 3 2 1
 *
 * Example 2:
 *   head = 5 -> 10 -> null
 *   Output: 10 5
 */

/*********************************** Solution ***********************************
  时间 O(n)，因为每个节点只访问一次
  空间 O(n)，来自递归调用栈深度，而不是额外的数据结构
*/
function reversePrint(llist) {
  if (!llist) return null;

  // pre order
  reversePrint(llist.next);
  // post order
  console.log(llist.data);
}
