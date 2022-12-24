/**
 * traversal tree - dfs_preOrder - 中左右
 */
const preOrder = (root) => {
  const visited = [];

  const helper = (node) => {
    if (!node) return;

    visited.push(node.val);
    helper(node.left);
    helper(node.right);
  };

  helper(root);
  return visited;
};

/**
 * traversal tree - dfs_inOrder - 左中右
 */
const inOrder = (root) => {
  const visited = [];

  const helper = (node) => {
    if (!node) return;

    helper(node.left);
    visited.push(node.val);
    helper(node.right);
  };

  helper(root);
  return visited;
};

/**
 * traversal tree - dfs_postOrder - 左右中
 */
const postOrder = (root) => {
  const visited = [];

  const helper = (node) => {
    if (!node) return;

    helper(node.left);
    helper(node.right);
    visited.push(node.val);
  };

  helper(root);
  return visited;
};
