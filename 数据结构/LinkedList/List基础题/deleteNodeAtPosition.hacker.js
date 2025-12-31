/**
  Problem Statement:
  An operation on a singly linked list deletes a node at a specified position.
  Given the head of a singly linked list and a zero-based position, delete the node
  at the specified position and return the updated head of the linked list.

  The node at the given position should be removed, and all subsequent nodes should
  be shifted one position to the left. The relative order of the remaining nodes
  must remain unchanged.

  Example 1:
    position = 1
    head = 1 -> 2 -> 4 -> null

    After deletion:
    1 -> 4 -> null

  Example 2:
    position = 0
    head = 1 -> 2 -> 3 -> null

    After deletion:
    2 -> 3 -> null

  Example 3:
    position = 2
    head = 1 -> 2 -> 3 -> null

    After deletion:
    1 -> 2 -> null
**/

/*********************************** Solution ***********************************/
function deleteNodeAtPosition(list, position) {
  if (!list) return null;
  if (position === 0) return list.next;

  let currIdx = 0;
  let curr = list;
  let prev = null; // 用于跟踪当前节点的前一个节点

  while (curr) {
    if (currIdx === position) {
      prev.next = curr.next;
      break;
    }

    prev = curr;
    curr = curr.next;
    currIdx++;
  }

  return list;
}
