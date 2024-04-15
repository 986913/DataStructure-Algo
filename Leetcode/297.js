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

//https://labuladong.online/algo/tree-class/tu-wen-er--762f5/dong-ge-sh-5e472/
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
  if (val == '#') return null; // <--- !!! 前提是Preorder数组中有“#”

  let node = new TreeNode(val);
  node.left = buildTree(preorder);
  node.right = buildTree(preorder);
  return node;
};

/*************************************************************************************************************
  总结下结论，当二叉树中节点的值不存在重复时：

  1.如果你的序列化结果中不包含空指针的信息，且你只给出1种遍历顺序，那么你无法还原出唯一的一棵二叉树。

  2.如果你的序列化结果中不包含空指针的信息，且你会给出2种遍历顺序，那么分两种情况：
    2.1. 如果你给出的是preorder和inorder，或者postorder和inorder，那么你可以还原出唯一的一棵二叉树。 (LC105, LC106)
    2.2. 如果你给出preorder和postorder，那么你无法还原出唯一的一棵二叉树, 但是可以还原出其中一个二叉树  (LC889)

  3.如果你的序列化结果中包含空指针的信息，且你只给出1种遍历顺序，也要分两种情况：
    3.1. 如果你给出的是preorder或者postorder，那么你可以还原出唯一的一棵二叉树。(LC297,449, buildBinaryTreeFromPostOrder.js, buildBinaryTreeFromPreOrder.js)
    3.2. 如果你给出的是中序，那么你无法还原出唯一的一棵二叉树。
*/
