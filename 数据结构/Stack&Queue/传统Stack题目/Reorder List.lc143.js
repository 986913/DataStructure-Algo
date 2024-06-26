/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/************************************************ 解法1：👍👍 Stack ************************************************************/
var reorderList = function (head) {
  // Step1: 创建一个栈用于存储list的节点, 并将所有节点压入栈中
  let stack = [];
  let p = head;
  while (p) {
    stack.push(p);
    p = p.next;
  }

  // Step2: 开始从头部重排list
  let curr = head;
  while (curr) {
    let lastNode = stack.pop(); // 从栈中弹出最后一个节点
    let next = curr.next; // 暂存当前节点的下一个节点

    //意味着我们已经到达(偶数长度||奇数长度)链表的中间位置，需要结束循环
    if (lastNode == next || lastNode.next == next) {
      lastNode.next = null; // 断开最后一个节点的下一个节点连接，防止形成环或多余的连接
      break;
    }

    //actual change the direction here:
    curr.next = lastNode; // 将当前节点的下一个节点指向从栈中弹出的最后一个节点
    lastNode.next = next; // 将最后一个节点的下一个节点指向暂存的节点

    curr = next; // 移动到下一个节点
  }
};

/********************************** 解法2： Slow & Fast pointer:  LC 21, 234变形题 *******************************************
This problem is a combination of these 3 easy problems:
  Find a middle node of the linked list. If there are two middle nodes, return the second middle node. 
    (Example: for the list 1->2->3->4->5->6, the middle element is 4.)
  Once a middle node has been found, reverse the second part of the list. 
    (Example: convert 1->2->3->4->5->6 into 1->2->3->4 and 6->5->4.)
  Now merge the two sorted lists. 
    (Example: merge 1->2->3->4 and 6->5->4 into 1->6->2->5->3->4.)
 */
/*----------------------------- Main function -------------------------------*/
var reorderList = function (head) {
  // Step 1: Find the middle of the linked list
  const midNode = getMid(head);

  // Step 2: 先reverse 后半段
  let secondHalf = reverse(midNode.next); //<---注意是midNode.next,而不是midNode

  // Step 3: 后把原始head list一切两半(前半段head, 后半段secondHalf)
  midNode.next = null; //<--- 先reverse后断开

  // Step 4: Merge two list
  return mergeTwoList(head, secondHalf);
};
/*----------- helper function : return the mid node of list ----------------*/
const getMid = (list) => {
  let dummyhead = new ListNode(-1, list);
  let slow = dummyhead;
  let fast = dummyhead;

  // find middle point:
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    prev = slow;
  }
  return slow;
};
/*----------- helper function : reverse a list ----------------*/
const reverse = (list) => {
  let prev = null;
  let curr = list;
  let next = list;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
/*----------- helper function ----------------*/
const mergeTwoList = (listA, listB) => {
  if (!listA) return listB;
  if (!listB) return listA;

  let newList = new ListNode(-1);
  let curr = newList;

  let p1 = listA;
  let p2 = listB;
  while (p1 && p2) {
    curr.next = p1;
    p1 = p1.next;
    curr = curr.next;

    curr.next = p2;
    p2 = p2.next;
    curr = curr.next;
  }
  //Attach the remaining nodes from p1 or p2 (给curr.next直接赋值，不用一个一个赋)
  if (p1) curr.next = p1;
  if (p2) curr.next = p2;

  return newList.next;
};
