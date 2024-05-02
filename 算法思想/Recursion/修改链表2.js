/********************** 迭代 ***********************/
const removeLast = (head) => {
  if (!head.next) return null; // 当head为最后一个node时

  let cur = head;
  while (cur.next.next) {
    cur = cur.next;
  }
  cur.next = null; //此时cur为倒数第2个, delete last node here

  return head;
};

/********************** Recursion ***********************/
const removeLast = (head) => {
  if (!head.next) return null; // 当head为最后一个node时

  head.next = removeLast(head.next);
  return head;
};
