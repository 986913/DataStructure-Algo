/** ----------------------------- pre order: 中左右 ----------------------------- */
const preorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    visted.push(node.val); // 中
    if (node.left) helper(node.left); // 左
    if (node.right) helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/** -----------------------------  in order: 左中右 ----------------------------- */
const inorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left); // 左
    visted.push(node.val); // 中
    if (node.right) helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/** -----------------------------   post order: 左右中 ----------------------------- */
const postorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left); // 左
    if (node.right) helper(node.right); // 右
    visted.push(node.val); // 中
  };

  helper(root);
  return visted;
};
