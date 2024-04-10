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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/*------------------------ Solution: Same as LC449 -------------------------- */
/**
 * Encodes a tree to a single string.
 * 序列化: 这个答案用的前序序列话  DFS-PreOrder-遍历思想
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function (root) {
  const visited = [];
  const helper = (node) => {
    if (node === null) {
      visited.push('#');
      return;
    }

    visited.push(node.val);
    helper(node.left);
    helper(node.right);
  };

  helper(root);
  return visited.join(',');
};

/**
 * Decodes your encoded data to tree.
 * 反序列化: 这个答案用的前序反序列话 DFS - 分解思想
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function (data) {
  return buildTree(data.split(','));
};

// helper function:
const buildTree = (preorder) => {
  // preorder is just the preOrder array. so the first item is 中节点的值
  let val = preorder.shift();
  if (val == '#') return null;

  let node = new TreeNode(val);
  node.left = buildTree(preorder);
  node.right = buildTree(preorder);
  return node;
};
