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

  // step 2: 使用 dijkstra 算法 计算从节点 k 到其他所有节点的最小权重 (最快路径 - 从k发送信号到各节点所需时间的最小值)
  let timeTo = dijkstra(graph, k);

  // step 3: 找到最大的最小权重 （即信号到达所有节点所需的最大时间）
  let result = 0;
  // 注意节点从 1 开始
  for (let i = 1; i < timeTo.length; i++) {
    if (timeTo[i] === Infinity) return -1; // 有节点不可达，返回 -1
    result = Math.max(result, timeTo[i]);
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
  constructor(id, timeFromStart) {
    this.id = id; // 图节点的 id
    this.timeFromStart = timeFromStart; // 从 start 节点到当前节点的距离
  }
}

const dijkstra = (graph, startIdx) => {
  // step1: 正着来，初始化 权重矩阵/timeTo矩阵，每个格子初始化为Infinity
  let timeTo = Array.from({ length: graph.length }, () => Infinity);
  timeTo[startIdx] = 0; // 起点到自身的时间为0

  // step2: 正着来: 优先级队列 timeFromStart 较小的排在前面
  let pq = new MyPriorityQueue((a, b) => a.timeFromStart - b.timeFromStart);

  // step3: 从起点 startIdx 开始进行 BFS
  pq.enqueue(new State(startIdx, 0));
  while (!pq.isEmpty()) {
    let { id: curNodeId, timeFromStart: curDistFromStart } = pq.dequeue();

    // 正着来: 已经有一条时间更小的路径 timeTo[curNodeId] 到达 curNode 节点了，则跳过
    if (curDistFromStart > timeTo[curNodeId]) continue;

    for (let neighbor of graph[curNodeId]) {
      let nextNodeId = neighbor[0];
      let weight = neighbor[1];

      // 正着来，看看从 curNode 达到 nextNode 权重(时间)是否会更小
      let timeToNextNode = timeTo[curNodeId] + weight;
      if (timeToNextNode < timeTo[nextNodeId]) {
        timeTo[nextNodeId] = timeToNextNode;
        pq.enqueue(new State(nextNodeId, timeToNextNode));
      }
    }
  }

  return timeTo;
};

class MyPriorityQueue {
  constructor(compare) {
    if (typeof compare !== 'function') {
      throw new Error('compare function required!');
    }

    this.data = [];
    this.compare = compare;
  }

  //二分查找 寻找插入位置
  search(target) {
    let low = 0,
      high = this.data.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (this.compare(this.data[mid], target) > 0) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  //添加
  enqueue(elem) {
    let index = this.search(elem);
    this.data.splice(index, 0, elem);
    return this.data.length;
  }

  //取出最优元素
  dequeue() {
    return this.data.shift();
  }

  //查看最优元素
  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}
