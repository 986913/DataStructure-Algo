/*********************************** Solution ***********************************
  时间 O(n)，因为每个节点只访问一次
  空间 O(n)，来自递归调用栈深度，而不是额外的数据结构
*/
function reversePrint(llist) {
  if (!llist) return null;

  // pre order
  reversePrint(llist.next);
  // post order
  console.log(llist.data);
}
