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
  constructor(val, next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null: next)
  }
}

// solution 1:  Iteration
var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(-1);
  let currentNode = dummyHead;

  if(!l1) return l2;
  if(!l2) return l1;

  while(l1!==null && l2!==null){
    if(l1.val < l2.val){
      currentNode.next = l1;
      l1 = l1.next;
    }else{
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next
  }
  if(l1) currentNode.next = l1;
  else if(l2) currentNode.next = l2;

  return dummyHead.next;
}

// solution 2: recursion
var mergeTwoListsV2 = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

  if(l1.val < l2.val){
    l1.next = mergeTwoListsV2(l1.next, l2);
    return l1;
  }else{
    l2.next = mergeTwoListsV2(l2.next, l1);
    return l2;
  }
}


// const l1 = [1,2,4];
// const l2 = [1,3,4];
// console.log(mergeTwoLists(l1, l2));    // [1,1,2,3,4]
// console.log(mergeTwoListsV2(l1, l2));  // [1,1,2,3,4]