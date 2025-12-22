/**
  Problem Statement:
  An operation on a singly linked list inserts a new node at the beginning (head) of the list.
  Given the head of a singly linked list and an integer data value, create a new node with the
  given data and insert it at the head of the list. Return the new head of the linked list.

  The new node should point to the original head, and the rest of the list must remain unchanged.

  Example 1:
    data = 3
    head = 1 -> 2 -> null
    After insertion: 3 -> 1 -> 2 -> null

  Example 2:
    data = 5
    head = null
    After insertion: 5 -> null
**/

/*********************************** Solution ***********************************/
function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  newNode.next = head;
  return newNode;
}
