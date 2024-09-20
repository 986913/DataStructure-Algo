/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

/******************************** Solution1: 二分图判定DFS模版(变形题) - LC785变形题 ********************************************/
var possibleBipartition = function (n, dislikes) {
  //1.先构建邻接表
  const graph = buildGraph(n, dislikes);

  //2.然后是LC785原题:
  let isBipartite = true;
  let visited = Array.from({ length: n + 1 }, () => false); // diff: length变成了n+1， 因为图的长度也是n+1
  let colors = Array.from({ length: n + 1 }, () => false); // diff: length变成了n+1， 因为图的长度也是n+1
  //DFS:
  const dfs = (graph, startIdx) => {
    if (isBipartite == false) return;
    visited[startIdx] = true; //pre-order
    for (let neigbor of graph[startIdx]) {
      if (visited[neigbor] === false) {
        colors[neigbor] = !colors[startIdx];
        dfs(graph, neigbor);
      } else {
        if (colors[neigbor] === colors[startIdx]) {
          isBipartite = false;
          return;
        }
      }
    }
  };
  //Main Logic start here:     从1开始，到i<n+1
  for (let i = 1; i < n + 1; i++) {
    if (visited[i] === false) dfs(graph, i);
  }

  return isBipartite;
};

/* Helper function: 根据边造图
  比如 n=4, edges=[[1,2],[1,3],[2,4]]
  graph为: [ [], [2,3], [1,4], [1], [2] ]
*/
const buildGraph = (n, edges) => {
  let graph = Array.from({ length: n + 1 }, () => []); // diff: length变成了n+1, 因为输入n是1开始
  for (let [node1, node2] of edges) {
    // 「无向图」相当于「双向图」
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
};

/******************************** Solution2: 二分图判定BFS模版(变形题) ********************************************/
var possibleBipartition = function (n, dislikes) {
  //1.先构建邻接表
  const graph = buildGraph(n, dislikes);

  //2.然后是LC785原题:
  let isBipartite = true;
  let visited = Array.from({ length: n + 1 }, () => false); // diff: length变成了n+1， 因为图的长度也是n+1
  let colors = Array.from({ length: n + 1 }, () => false); // diff: length变成了n+1， 因为图的长度也是n+1
  //BFS
  const bfs = (graph, startIdx) => {
    let queue = [startIdx];
    visited[startIdx] = true;

    while (queue.length && isBipartite) {
      let currIdx = queue.shift();

      for (let neigbor of graph[currIdx]) {
        if (visited[neigbor] === false) {
          colors[neigbor] = !colors[currIdx];
          queue.push(neigbor);
          visited[neigbor] = true;
        } else {
          if (colors[neigbor] === colors[currIdx]) {
            isBipartite = false;
            return;
          }
        }
      }
    }
  };
  //Main Logic start here:     从1开始，到i<n+1
  for (let i = 1; i < n + 1; i++) {
    if (visited[i] === false) bfs(graph, i);
  }

  return isBipartite;
};

/* Helper function: 根据边造图
  比如 n=4, edges=[[1,2],[1,3],[2,4]]
  graph为: [ [], [2,3], [1,4], [1], [2] ]
*/
const buildGraph = (n, edges) => {
  let graph = Array.from({ length: n + 1 }, () => []); // diff: length变成了n+1, 因为输入n是1开始
  for (let [node1, node2] of edges) {
    // 「无向图」相当于「双向图」
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
};
