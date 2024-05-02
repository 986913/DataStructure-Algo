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
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(-1);
  let curr = dummyNode;
  let carry = 0; //进位

  while (l1 || l2) {
    //得到当前l1和l2的数字：
    let n1 = l1 === null ? 0 : l1.val;
    let n2 = l2 === null ? 0 : l2.val;

    //求和,创建新节点，且更新carry
    let sum = n1 + n2 + carry;
    let reminder = sum % 10;
    curr.next = new ListNode(reminder);
    carry = sum >= 10 ? 1 : 0;

    //移动到下一个点
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    curr = curr.next;
  }

  //不要忘记最后进位!!！
  if (carry !== 0) {
    curr.next = new ListNode(carry); //OR:  curr.next = new ListNode(1);
  }

  return dummyNode.next;
};
