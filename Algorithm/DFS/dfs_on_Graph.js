/**
  Write a function that implements the depth-first search algorithm on a directed graph (in adjacency list format), sgiven a starting node.
 */

/****************************** 测试用例 ****************************/
const graph1 = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};
depthFirstSearch(graph1, 'A'); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
depthFirstSearch(graph1, 'B'); // ['B', 'E', 'D', 'I', 'J', 'F']

const graph2 = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F', 'G'],
  D: [],
  E: [],
  F: [],
  G: [],
};
depthFirstSearch(graph2, 'A'); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
depthFirstSearch(graph2, 'E'); // ['E']

/* ---------------------------- Solution ------------------------- */
/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
function depthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) return [];
  let visited = [];

  const helper = (node) => {
    if (!node) return;
    // 不同点1:
    if (visited.includes(node)) return;

    visited.push(node);
    //不同点2：这里不再是 ndoe.left node.right 而是用forEach循坏graph[node]
    graph[node].forEach((neighbor) => helper(neighbor));
  };

  helper(source);
  return visited;
}
