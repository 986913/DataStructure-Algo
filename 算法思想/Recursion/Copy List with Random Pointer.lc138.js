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

/*************************** Recursion + hashmap *************************************/
var copyRandomList = function (head) {
  if (head === null) return null;

  let map = new Map();
  function helper(node) {
    if (node === null) return null;
    if (map.has(node)) return map.get(node);

    let newNode = new Node(node.val, null, null);
    map.set(node, newNode);
    newNode.next = helper(node.next); // recursion here
    newNode.random = helper(node.random); // recursion here
    return newNode;
  }

  return helper(head);
};
