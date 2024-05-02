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

var deleteDuplicates = function (head) {
  let dummyHead = new ListNode('head', head);
  let prev = dummyHead; // 多了一个prev
  let curr = dummyHead.next;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      //重点在这： 当发现重复节点时，我们遍历所有连续的重复节点以找到最后一个重复节点
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next; // 继续移动当前节点指针，直到找到不同值的节点
      }
      prev.next = curr.next; // 更新前一个节点的下一个指针以跳过重复节点
    } else {
      prev = curr; // 将前一个节点指针移到当前节点，继续遍历
    }

    curr = curr.next; // 移动当前节点指针到下一个节点
  }

  return dummyHead.next;
};
