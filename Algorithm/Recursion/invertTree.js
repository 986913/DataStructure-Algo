/**
 *
 * @param {*} root
 * @returns root
 */

/* DFS_preOrder: 🀄️左右 */
const invertTree = (root) => {
  if (!root) return root;

  const helper = (node) => {
    if (!node) return;

    [node.left, node.right] = [node.right, node.left]; //🀄️
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };
  helper(root);
  return root;
};
