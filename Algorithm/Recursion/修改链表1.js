/********************** 迭代 ***********************/
const addLast = (head, val) => {
  if (!head) return new ListNode(val);

  let cur = head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = new ListNode(val); //此时cur为最后一个node， add new node here

  return head;
};

/********************** Recursion ***********************/
const addLast = (head, val) => {
  if (head === null) {
    return new ListNode(val);
  }

  head.next = addLast(head.next, val); // 关键点在于 head.next = ....   (用于接收 递归函数的返回值)
  return head;
};
