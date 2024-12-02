/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} startIdx
 * @param {number} endIdx
 * @return {number}
 */
/*************************   Solution: dijkstra 算法 (会用到PriortyQueue class) ******************************/

/****************** Main function ******************/
var maxProbability = function (n, edges, succProb, startIdx, endIdx) {
  // step1: build graph;
  const graph = buildGraph(n, edges, succProb);

  // step2: dijkstra - 计算从start to 每个节点的最大权重(最大概率值)
  const probTo = dijkstra(graph, startIdx, endIdx);

  // step3: 所以返回start to end的最大权重：有值说明有最大权重(概率), 有-Infinity说明从 start开始无法到达 end，返回 0
  return probTo[endIdx] === -Infinity ? 0 : probTo[endIdx];
};

/****************** Helper function ******************/
const buildGraph = (n, edges, succProb) => {
  let graph = Array.from({ length: n }, () => []);
  edges.forEach((edge, index) => {
    const [from, to] = edge;
    const weight = succProb[index];

    graph[from].push([to, weight]);
    graph[to].push([from, weight]); //<--- diff is here， 无向图就是双向图
  });
  return graph;
};

class State {
  constructor(id, probFromStart) {
    this.id = id;
    this.probFromStart = probFromStart; // 从 start 节点到当前节点的概率
  }
}

const dijkstra = (graph, startIdx, endIdx) => {
  let probTo = Array.from({ length: graph.length }, () => -Infinity); // <- 反着来: dp table 初始化为一个取不到的最小值
  probTo[startIdx] = 1; // <- 反着来: start到start的概率就是1

  //<- 反着来: 优先级队列 probFromStart 较大的排在前面
  let pq = new MyPriorityQueue((a, b) => b.probFromStart - a.probFromStart);

  // 从起点 start 开始进行 BFS
  pq.enqueue(new State(startIdx, 1));
  while (!pq.isEmpty()) {
    let { id: curNodeId, probFromStart: curProbFromStart } = pq.dequeue();

    // 遇到终点提前返回：
    if (curNodeId === endIdx) return curProbFromStart;

    // <-反着来: 已经有一条概率更大的路径 probTo[curNodeId] 到达 curNode 节点了
    if (curProbFromStart < probTo[curNodeId]) continue;

    for (let neighbor of graph[curNodeId]) {
      let nextNodeId = neighbor[0];
      let weight = neighbor[1];

      // <-反着来: 看看从 curNode 达到 nextNode 的权重(概率)是否会更大
      let probToNextNode = probTo[curNodeId] * weight;
      if (probToNextNode > probTo[nextNodeId]) {
        probTo[nextNodeId] = probToNextNode;
        pq.enqueue(new State(nextNodeId, probToNextNode));
      }
    }
  }

  //返回完整的probTo
  return probTo;
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
