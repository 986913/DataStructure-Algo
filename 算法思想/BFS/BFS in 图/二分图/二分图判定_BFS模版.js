/***************************** 二分图判定框架（BFS遍历图节点模版-稍加变形） *********************************/
var levelOrder = function (graph, startNodeIndex) {
  if (!graph) return [];

  let visitedNodes = [];
  let visited = new Array(graph.length).fill(false); //用于标记每个节点是否已经被访问过，初始化为false

  visited[startNodeIndex] = true; // <--- diff is here
  let queue = [startNodeIndex];
  // let step = 0;     //optional: 记录遍历的步数

  while (queue.length) {
    let nodeIdx = queue.shift();
    visitedNodes.push(nodeIdx); //更新visitedNodes, 记录被访问的节点索引

    for (let neighbor of graph[nodeIdx]) {
      // 相邻节点neighbor没被访问过
      if (visited[neighbor.to] === false) {
        // 那么应该给节点neighbor涂上和节点nodeIdx不同的颜色
        queue.push(neighbor); // 然后把邻居neighbor放进队列
        visited[neighbor] = true; // 然后把邻居标记已被访问
      } else {
        // 相邻节点neighbor已经被访问过,那么应该比较节点neighbor和当前节点neighbor的颜色
        // 若相同，则此图不是二分图
      }
    }
    // step++        //optional: 记录遍历的步数
  }

  return visitedNodes;
};
