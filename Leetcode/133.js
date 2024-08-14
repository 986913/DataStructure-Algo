/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

var cloneGraph = function (node) {
  if (!node) return null;

  let visited = new Map(); // 使用哈希表 visited 记录已克隆的节点：避免重复克隆和处理循环图的情况。

  const helper = (n) => {
    if (!n) return;
    if (visited.has(n.val)) return visited.get(n.val);

    const { val, neighbors } = n;
    const newNode = new _Node(val); //创建新节点
    visited.set(val, newNode);
    newNode.neighbors = neighbors.map((item) => helper(item)); // 使用 map 方法递归克隆所有的邻居节点。

    return newNode;
  };

  return helper(node);
};
