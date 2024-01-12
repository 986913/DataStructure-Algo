/************************** 判断链表是否有环 ************************************/
const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true; // if(slow === fast) is inside while loop, if they are equal means there is cycle
  }
  return false; // means no cycle
};

/*********************** 已知链表有环 返回环的起始位置 ****************************/
const detectCycle = (head) => {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  /* 1. 先用slow，fast指针判断list有没有环 */
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    /* 2. fast和slow指针相遇了（相遇点），说明有环, 
       接下来进行第2步：得出环入口处 */
    if (fast === slow) {
      slow = head; //fast保持原地，让slow到head的位置 开始新的move

      //当他们再次相遇时 就是环形入口处
      while (fast !== slow) {
        // slow, fast以相同的速度前进
        slow = slow.next;
        fast = fast.next;
      }

      return slow; // 两个指针相遇的节点就是环的起点
    }
  }

  return null; //没环直接返回null
};

/*********************** 寻找无环单链表中点 ****************************/
const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // slow就在中间位置了
};

/*********************** 寻找单链表的倒数第k个元素 ****************************/
const theLastNthFromEnd = (head, n) => {
  let slow = dummyhead;
  let fast = dummyhead;

  //先让fast走n步
  while (n) {
    fast = fast.next;
    n--;
  }

  //再同时让slow fast走, 直到fast.next===null
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow; // slow就是单链表的倒数第k个元素
};
