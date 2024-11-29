/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

/*************************   Solution: dijkstra 算法 (会用到PriortyQueue class) ******************************/

/****************** Main function ******************/
var networkDelayTime = function (times, n, k) {
  // step 1: build graph
  let graph = buildGraph(n, times);

  // step 2:  dijkstra - 计算以节点 k 为起点到其他节点的 最短路径(权重)
  let distTo = dijkstra(graph, k);

  // step 3: 找到最长的那一条 最短路径(权重)
  let result = 0;
  // 注意节点从 1 开始
  for (let i = 1; i < distTo.length; i++) {
    if (distTo[i] === Infinity) return -1; // 有节点不可达，返回 -1
    result = Math.max(result, distTo[i]);
  }
  return result;
};

/****************** Helper function ******************/
const buildGraph = (n, edges) => {
  //注意是：n+1, 因为节点从1开始
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let edge of edges) {
    const [from, to, weight] = edge;
    graph[from].push([to, weight]);
  }
  return graph;
};
class State {
  constructor(id, distFromStart) {
    this.id = id; // 图节点的 id
    this.distFromStart = distFromStart; // 从 start 节点到当前节点的距离
  }
}

const dijkstra = (graph, startIdx) => {
  let V = graph.length;
  let distTo = Array.from({ length: V }, () => Infinity);
  distTo[startIdx] = 0;

  let pq = new MyPriorityQueue((a, b) => a.distFromStart - b.distFromStart);
  pq.enqueue(new State(startIdx, 0));

  while (!pq.isEmpty()) {
    let { id: curNodeId, distFromStart: curDistFromStart } = pq.dequeue();

    if (curDistFromStart > distTo[curNodeId]) continue;

    for (let neighbor of graph[curNodeId]) {
      let nextNodeId = neighbor[0];
      let weight = neighbor[1];

      // 看看从 curNode 达到 nextNode 的距离(权重)是否会更短
      let distToNextNode = distTo[curNodeId] + weight;
      if (distToNextNode < distTo[nextNodeId]) {
        distTo[nextNodeId] = distToNextNode;
        pq.enqueue(new State(nextNodeId, distToNextNode));
      }
    }
  }

  return distTo;
};
