/**
  Steps:
    1. 确定递归函数的 参数 和 返回值
    2. 确定终止条件
    3. 确定单层递归的逻辑
 **/

/** ----------------------------- pre order: 中左右 ----------------------------- */
const preorderTraversal = (root) => {
  let visted = [];

  /*递归函数的 参数 和 返回值 */
  const helper = (node) => {
    /*终止条件 */
    if (!node) return;

    /* 单层递归的逻辑 */
    visted.push(node.val); // 🀄️
    helper(node.left); // 左
    helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/** -----------------------------  in order: 左中右 ----------------------------- */
const inorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    helper(node.left); // 左
    visted.push(node.val); // 🀄️
    helper(node.right); // 右
  };

  helper(root);
  return visted;
};

/** -----------------------------   post order: 左右中 ----------------------------- */
const postorderTraversal = (root) => {
  let visted = [];

  const helper = (node) => {
    if (!node) return;

    helper(node.left); // 左
    helper(node.right); // 右
    visted.push(node.val); // 🀄️
  };

  helper(root);
  return visted;
};
