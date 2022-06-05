/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;

  let hash = new Map();

  function helper(node) {
    if (node === null) return null;

    if (hash.has(node)) return hash.get(node);

    let newNode = new Node(node.val, null, null);

    hash.set(node, newNode);

    newNode.next = helper(node.next);
    newNode.random = helper(node.random);
    // console.log(hash)

    return newNode;
  }

  return helper(head);
};
