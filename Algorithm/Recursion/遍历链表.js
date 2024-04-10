/********************** 迭代 ***********************/
const printList = (head) => {
  let cur = head;
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
};

/********************** Recursion ***********************/
const printList = (head) => {
  if (!head) return;

  console.log(head.val);
  printList(head.next);
};
