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
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let dummyhead = new ListNode(-1);
  let curr = dummyhead;

  let p1 = list1;
  let p2 = list2;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
    }
    curr = curr.next; // <--- don't forget this line
  }

  //给curr.next直接赋值，不用一个一个赋
  if (p1) curr.next = p1;
  if (p2) curr.next = p2;

  return dummyhead.next;
};

/*  ----------------------- 👍 solution 2: recursion  ----------------------- */
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
