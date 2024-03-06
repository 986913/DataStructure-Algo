const preorderTraversal = (root) => {
  if (!root) return []; // handle edge case

  let stack = [root];
  let visited = [];

  while (stack.length) {
    let curr = stack.pop();
    visited.push(curr.val); //update result before 入栈

    // 入栈： 先右 -> 后左
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return visited;
};
