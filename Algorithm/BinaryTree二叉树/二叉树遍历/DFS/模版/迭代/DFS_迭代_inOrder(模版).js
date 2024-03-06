const inorderTraversal = (root) => {
  let cur = root; //指针用来访问节点

  const stack = [];
  let visited = [];

  while (stack.length || cur) {
    //指针用来访问节点,访问到最底层
    if (cur) {
      stack.push(cur); // 将访问的节点放进栈
      cur = cur.left; // 左
    } else {
      cur = stack.pop(); // --> 弹出 中
      visited.push(cur.val);

      cur = cur.right; // 右
    }
  }

  return visited;
};
