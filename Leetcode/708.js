var insert = function (head, insertVal) {
  let newNode = new Node(insertVal);
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }

  let node = head.next;
  let prev = head;

  while (true) {
    if (
      (insertVal <= node.val && prev.val < insertVal) ||
      (insertVal <= node.val && prev.val > node.val) ||
      (insertVal >= prev.val && prev.val > node.val) ||
      node === head
    ) {
      // 在这儿插入
      newNode.next = node;
      prev.next = newNode;
      break;
    }

    prev = node;
    node = node.next;
  }

  return head;
};
