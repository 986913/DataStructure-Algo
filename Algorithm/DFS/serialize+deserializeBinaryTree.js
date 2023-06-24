/**
  Can you transform(serialize) a binary tree into a string and restore(deserialize) a binary tree from the string? 
  Just like what [JSON.stringify()](https://bigfrontend.dev/problem/implement-JSON-stringify) and [JSON.parse()](https://bigfrontend.dev/problem/implement-JSON-parse) do. 
  Binary tree in this problem consists of value of integers.

  For example, for a tree from [91. invert a binary tree](https://bigfrontend.dev/problem/invert-a-binary-tree), 
  BFE.dev would serialize it to `[1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]`
  But there are more ways of doing it rather than above, any would be fine as long as your `deserialize()` and `serialize()` work as a pair.
 */

/* ---------- 用例测试 ------------ */
const tree1 = // some tree
  expect(typeof serialize(tree1)).toBe('string');
const tree2 = deserialize(serialize(tree1));
expect(isIdentical(tree1, tree2)).toBe(true);

/* --------------------- Code solution --------------------- */
/* This is the class for the node, you can use this directly as it is bundled with your code:
  class Node {
    value: number
    left: null | Node
    right: null | Node
    constructor(val) {
      this.value = val
      this.left = null
      this.right = null
    }
  }
*/
/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  if (!root) return '';

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    visited.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return visited.join('');
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  let arr = str.split('');
}
