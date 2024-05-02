// https://www.bilibili.com/video/BV1Zf4y1a77g/?spm_id_from=333.788&vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6

const inorderTraversal = (root) => {
  let cur = root; //指针用来访问节点

  const stack = [];
  let visited = [];

  while (stack.length || cur !== null) {
    // 当指针cur不为空的时候，要入栈:
    if (cur !== null) {
      stack.push(cur); // 入栈
      cur = cur.left; // 指针用来访问节点,访问到最底层 (一路向左)
    } else {
      // 当指针cur为空的时候，要出栈:
      cur = stack.pop();
      visited.push(cur.val);

      cur = cur.right; // 更新cur
    }
  }

  return visited;
};
