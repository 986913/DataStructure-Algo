//https://www.bilibili.com/video/BV1YT411g7br?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

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
  let dummyHead = new ListNode(-1, head);
  let curr = dummyHead;

  /* 当链表有偶数节点时, while终止于curr.next, 
     当链表有奇数节点时, while终止于curr.next.next */
  while (curr.next && curr.next.next) {
    /*交换之前先存下两个tmp值*/
    let tmp1 = curr.next;
    let tmp2 = curr.next.next.next;

    /*开始交换*/
    curr.next = curr.next.next;
    curr.next.next = tmp1;
    tmp1.next = tmp2;

    //交换完后，向后移两次curr
    curr = curr.next.next;
  }

  return dummyHead.next;
};
