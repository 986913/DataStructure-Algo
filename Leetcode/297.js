/*------------------------ Solution: Same as lc449 -------------------------- */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// DFS : Pre order
let serialize = function (root) {
  const visited = [];
  const helper = (node) => {
    if (!node) return visited.push(null);

    visited.push(node.val);
    helper(node.left);
    helper(node.right);
  };

  helper(root);
  return visited;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function (data) {
  let val = data.shift();
  if (val == null) return null;

  let node = new TreeNode(val);
  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
