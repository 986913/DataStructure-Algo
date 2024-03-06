/****************************** (搭了pre-order的顺风车) *****************************************/
const postorderTraversal = (root) => {
  if (!root) return [];

  const stack = [root];
  const visited = [];

  while (stack.length) {
    const curr = stack.pop();
    visited.push(curr.val); // update result before 入栈

    // 入栈： 先左 -> 后右 (相对于前序遍历，这更改一下入栈顺序)
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return visited.reverse(); //  中 -> 右 -> 左  反转为 ： 左 -> 右 -> 中  (相对于前序遍历，这里reverse一下)
};
