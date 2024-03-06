/** ----------------------------- pre order: 中左右  then压栈顺序：右中左 ----------------------------- */
const preorderTraversal = (root) => {
  const visited = [];
  const stack = [];

  if (root) stack.push(root);

  while (stack.length) {
    const curr = stack.pop();

    if (!curr) {
      let node = curr.pop();
      visited.push(node.val);
      continue;
    }

    if (curr.right) stack.push(curr.right); // 右
    stack.push(curr); // 中
    stack.push(null);
    if (curr.left) stack.push(curr.left); // 左
  }
  return visited;
};

/** -----------------------------  in order: 左中右   then压栈顺序：右左中----------------------------- */
const inorderTraversal = (root) => {
  const visited = [];
  const stack = [];

  if (root) stack.push(root);

  while (stack.length) {
    const curr = stack.pop();

    if (!curr) {
      let node = stack.pop();
      visited.push(node.val);
      continue;
    }

    if (curr.right) stack.push(curr.right); // 右
    if (curr.left) stack.push(curr.left); // 左
    stack.push(curr); // 中
    stack.push(null);
  }
  return visited;
};

/** -----------------------------   post order: 左右中 then压栈顺序：中右左 ----------------------------- */
const postorderTraversal = (root) => {
  const visited = [];
  const stack = [];

  if (root) stack.push(root);

  while (stack.length) {
    const curr = stack.pop();

    if (!curr) {
      let node = curr.pop();
      visited.push(node.val);
      continue;
    }

    stack.push(curr); // 中
    stack.push(null);
    if (curr.right) stack.push(curr.right); // 右
    if (curr.left) stack.push(curr.left); // 左
  }

  return visited;
};
