/**
  Problem Statement:
  Given the heads of two singly linked lists, determine whether the two lists
  are identical.

  Two linked lists are considered identical if:
  - They have the same length, and
  - All corresponding nodes contain the same data in the same order.

  The function should return 1 if the lists are identical, and 0 otherwise.

  Example 1:
    llist1 = 1 -> 2 -> 3 -> null
    llist2 = 1 -> 2 -> 3 -> null

    Output:
    1

  Example 2:
    llist1 = 1 -> 2 -> 3 -> null
    llist2 = 1 -> 2 -> 4 -> null

    Output:
    0

  Example 3:
    llist1 = 1 -> 2 -> null
    llist2 = 1 -> 2 -> 3 -> null

    Output:
    0
**/

/*********************************** Solution 1 - 递归 ***********************************
  Time:  O(max(n, m))
  Space: O(max(n, m)) due to recursion call stack
*/

function CompareLists(llist1, llist2) {
  // Base cases
  if (!llist1 && !llist2) return 1;
  if (llist1 && !llist2) return 0;
  if (!llist1 && llist2) return 0;

  // 当前层判断 pre-order logic （我能决定的）
  if (llist1.data !== llist2.data) return 0;
  // 开始递归，并返回它的答案 （我不能决定的，问下一层）
  return CompareLists(llist1.next, llist2.next);
}

/*********************************** Solution 2 - 迭代 **********************************
  Time:  O(max(n, m))
  Space: O(1)
*/
function CompareLists(llist1, llist2) {
  while (llist1 && llist2) {
    if (llist1.data !== llist2.data) return 0; // 数据不相等，直接返回0

    llist1 = llist1.next;
    llist2 = llist2.next;
  }

  if (llist1 && !llist2) return 0; // 说明llist1比llist2长
  if (!llist1 && llist2) return 0; // 说明llist2比llist1长
  return 1; // 两个链表都到达了末尾，说明完全相等
}
