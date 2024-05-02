/**
  Write a function that implements the breadth-first search (BFS) algorithm on a directed graph (in adjacency list format), given a starting node.
  BFS is an algorithm used for traversing a graph or a tree, starting from the root node and exploring all the neighbors at the current depth before moving on to nodes at the next depth level. 
  The output from BFS is an array of the graph's nodes in the order they were traversed. Visiting neighboring nodes in any order is a valid BFS, 
  but for this question, please visit each node's neighbors from left to right.
 */

/****************************** 测试用例 ****************************/
/*
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

breadthFirstSearch(graph1, 'A'); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        A
      / | \
     B  C  D
   / |   |   | \
  E  F   G   H  I
         |
         J

breadthFirstSearch(graph1, 'B'); // ['B', 'E', 'F', 'D', 'I', 'J']
    B
   / \
  E   F
  |
  D
 / \
I   J


const graph2 = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F', 'G'],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
};

breadthFirstSearch(graph2, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

       A
     /   \
    B     C
  /  \   /   \
 D   E  F    G

breadthFirstSearch(graph2, 'E')); // ['E']
*/

/* ------------------- Solution: BFS结果是1维数组时 ---------------------------------------------------- */
/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. Has to be a valid node if graph is non-empty.
 * @return {Array<string>} A BFS-traversed order of nodes.
 */

function breadthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) return [];

  let visited = [];
  let queue = [source]; //不同点在这：这里不再是[graph], 而是[source]

  while (queue.length) {
    let node = queue.shift();
    visited.push(node);
    //不同点在这：这里不再是 ndoe.left node.right 而是用forEach循坏graph[node]
    graph[node].forEach((neighbor) => {
      if (visited.includes(neighbor)) return;
      if (neighbor) queue.push(neighbor);
    });
  }

  return Array.from(new Set(visited));
}
