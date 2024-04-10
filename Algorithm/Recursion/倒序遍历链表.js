/********************** Recursion ***********************/
const printList = (head) => {
  if (!head) return;

  printList(head.next);
  console.log(head.val); //<---- diff is here, move it down under printList recursion func.
};
