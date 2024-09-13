const preorderTraversal_Graph = (graph) => {
  // boolean数组，每个元素表示图中相应节点是否在当前路径中
  let visited = new Array(graph.length).fill(false);
  // 记录被遍历过的节点
  let visitedNodes = [];

  const traversal = (graph, srcIndex) => {
    if (srcIndex < 0 || srcIndex >= graph.length) return;
    // 需要一个 visited 数组记录被遍历过的节点，避免走回头路陷入死循环
    if (visited[srcIndex]) return;

    // 前序位置
    visited[srcIndex] = true;
    visitedNodes.push(srcIndex); //更新visitedNodes, 记录被访问的节点索引

    for (let neighbor of graph[srcIndex]) {
      traversal(graph, neighbor.to);
    }
    // 后序位置（如果需要，可在这里添加逻辑）
  };

  traversal(graph, 0);
  return visitedNodes;
};

/******************** 用例测试：Assuming graph is represented as an adjacency list ********************/
const graph = [
  [{ to: 1 }, { to: 2 }], // Neighbors of node 0
  [{ to: 3 }], // Neighbors of node 1
  [{ to: 3 }, { to: 4 }], // Neighbors of node 2
  [], // Neighbors of node 3
  [{ to: 5 }], // Neighbors of node 4
  [], // Neighbors of node 5
];
preorderTraversal_Graph(graph); //输出被访问的节点索引：[0, 1, 3, 2, 4, 5]
