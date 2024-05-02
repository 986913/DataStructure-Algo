/********************** Solution: 前序，序列化和反序列化  LC449, 297变形题 ***********************/

/**
 * @param {Node|null} root
 * @return {string}
 * 序列化: 这个答案用的前序序列话  DFS-PreOrder-遍历思想
 * Encodes a N-ary tree to a single string.
 */
const serialize = (root) => {
  let result = [];
  const helper = (node) => {
    if (node === null) {
      result.push('#');
      return;
    }

    result.push(node.val);
    result.push(node.children.length); // <--- diff is here: 记录子节点数量
    for (let child of node.children) {
      helper(child);
    }
  };

  helper(root);
  return result.join(',');
};

/**
 * @param {string} data
 * @return {Node|null}
 * 反序列化: 这个答案用的前序反序列话 DFS - 分解思想
 * Decodes your encoded data to a N-ary tree.
 */
const deserialize = (data) => {
  return this.buildTree(data.split(','));
};

const buildTree = (preorder) => {
  let val = preorder.shift();
  if (val === '#') return null;

  let node = new Node(val);
  let childrenCount = preorder.shift(); // <--- diff is here: 读取子节点数量
  node.children = []; // <--- diff is here
  for (let i = 0; i < childrenCount; i++) {
    node.children.push(this.buildTree(preorder));
  }
  return node;
};
