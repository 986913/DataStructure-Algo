/***************************** 二分图判定框架（DFS遍历图节点模版-稍加变形） *********************************/

const preorderTraversal_Graph = (graph) => {
  // boolean数组，每个元素表示图中相应节点是否在当前路径中
  let visited = new Array(graph.length).fill(false);
  // 记录被遍历过的节点
  let visitedNodes = [];

  const traversal = (graph, srcIndex) => {
    // 前序位置
    visited[srcIndex] = true;
    visitedNodes.push(srcIndex); //更新visitedNodes, 记录被访问的节点索引
    for (let neighbor of graph[srcIndex]) {
      // 相邻节点neighbor没被访问过
      if (visited[neighbor.to] === false) {
        // 那么应该给节点neighbor涂上和节点srcIndex不同的颜色
        // 然后继续遍历
        traversal(graph, neighbor.to);
      } else {
        // 相邻节点 neighbor 已经被访问过,那么应该比较节点neighbor和当前节点srcIndex的颜色
        // 若相同，则此图不是二分图
      }
    }
  };

  traversal(graph, 0);
  return visitedNodes;
};

/* 用例测试：Assuming graph is represented as an adjacency list
	const graph = [
	  [{ to: 1 }, { to: 2 }], // Neighbors of node 0
	  [{ to: 3 }],            // Neighbors of node 1
	  [{ to: 3 }, { to: 4 }], // Neighbors of node 2
	  [],                     // Neighbors of node 3
	  [{ to: 5 }],            // Neighbors of node 4
	  []                      // Neighbors of node 5
	];
*/
