/**
  Problem Statement:
  An operation on a singly linked list appends a new node to the end (tail) of the list.
  Given the head of a singly linked list and an integer data, insert a new node with the
  given data value at the tail of the list and return the updated head.

  The original list structure must be preserved, and the new node should become the last node in the list.

  Example 1:
    data = 3
    head = 1 -> 2 -> null
    After insertion: 1 -> 2 -> 3 -> null

  Example 2:
    data = 5
    head = null
    After insertion: 5 -> null
**/

/*********************************** Solution ***********************************/
function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  if (!head) return newNode;

  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = newNode;

  return head;
}
