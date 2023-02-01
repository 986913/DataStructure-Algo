/* Merge Two Sorted Lists */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*  ----------------------- 👍 solution 1:  Iteration   ----------------------- */
const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  let dummyhead = new ListNode(-1);
  let curr = dummyhead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next; // <--- don't forget this line
  }

  if (list1) curr.next = list1;
  else if (list2) curr.next = list2;

  return dummyhead.next;
};

/*  ----------------------- solution 2: recursion  ----------------------- */
const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// const l1 = [1,2,4];
// const l2 = [1,3,4];
// console.log(mergeTwoLists(l1, l2));    // [1,1,2,3,4]
// console.log(mergeTwoListsV2(l1, l2));  // [1,1,2,3,4]
