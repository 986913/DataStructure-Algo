/**
  Given the root to a binary tree where each node has an additional pointer called sibling (or next), 
  connect the sibling pointer to the next node in the same level. 
  The last node in each level should point to the first node of the next level in the tree.
  
  Consider the following binary tree.
                100
                / \
              50   200
              /\     \
            25  75   300
                        \
                        350
 */

/* --------------------------Solution: BFS --------------------------- */
const populateSiblingPointers = (root) => {
  if (!root) return;

  let queue = [root];
  let prev = null;

  while (queue) {
    let node = queue.shift();
    if (prev) prev.next = node; // 设置prev的next指向
    prev = node; // 更新prev
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  prev.next = null;
};
