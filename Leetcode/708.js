var insert = function (head, insertVal) {
  let newNode = new Node(insertVal);
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }
  let prev = head;
  let curr = head.next;

  while (true) {
    if (
      curr === head ||
      (insertVal <= curr.val && insertVal >= prev.val) ||
      (insertVal <= curr.val && curr.val < prev.val) ||
      (insertVal > prev.val && curr.val < prev.val)
    ) {
      newNode.next = curr;
      prev.next = newNode;
      break;
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
};
