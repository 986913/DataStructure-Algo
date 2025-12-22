/**
  Problem Statement:
  An operation on a singly linked list inserts a new node at a specified position. 
  Given the head of a singly linked list, an integer data value, and a zero-based position, 
  create a new node with the given data and insert it into the list at the specified position. 
  Return the updated head of the linked list.

  The new node should occupy the specified position, with all subsequent nodes shifted one 
  position to the right. The original list structure must otherwise remain unchanged.

  Example 1:
    data = 3
    position = 1
    head = 1 -> 2 -> 4 -> null

    After insertion:
    1 -> 3 -> 2 -> 4 -> null

  Example 2:
    data = 5
    position = 0
    head = 1 -> 2 -> 3 -> null

    After insertion:
    5 -> 1 -> 2 -> 3 -> null

  Example 3:
    data = 6
    position = 3
    head = 1 -> 2 -> 3 -> null

    After insertion:
    1 -> 2 ->
**/

/*********************************** Solution ***********************************/
function insertNodeAtPosition(list, data, position) {
  let newNode = new SinglyLinkedListNode(data);

  if (position === 0) {
    newNode.next = list;
    return newNode;
  }

  let currIdx = 0;
  let curr = list;

  while (curr.next) {
    let followingNode = curr.next;
    // 注意 这里是 position - 1，因为我们需要在当前位置的前一个节点后插入新节点
    if (currIdx === position - 1) {
      curr.next = newNode;
      newNode.next = followingNode;
      break;
    }

    currIdx++;
    curr = curr.next;
  }
  return list;
}
