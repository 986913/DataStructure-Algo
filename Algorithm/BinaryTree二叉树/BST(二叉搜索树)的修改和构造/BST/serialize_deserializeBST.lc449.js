/**
  Serialize a binary tree to a file and then deserialize it back to a tree so that the original and the deserialized trees are identical.
    Serialize: write the tree in a file.
    Deserialize: read from a file and reconstruct the tree in memory.
    Consider the below tree as the input tree.
            100
            / \
          50  200
          /\     \
        25 75    350
    There is no restriction regarding the format of a serialized stream, therefore you can serialize it in any efficient format. 
    However, after deserializing the tree from the stream, it should be exactly like the original tree.
            100
            / \
          50  200
          /\     \
        25 75    350
 */

/*------------------------ Solution: Same as lc297 -------------------------- */
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
