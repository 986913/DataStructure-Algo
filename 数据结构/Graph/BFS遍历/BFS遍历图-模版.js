/****************************** 多叉树的遍历框架 **************************

  var levelOrder = function (root) {
    if (!root) return [];

    let visitedNodes = [];
    let queue = [root];
    // let depth=0;     //optional: 记录tree总共有多少层。。

    while (queue.length) {
      let len = queue.length;
      let currLevel = [];
      // depth++       //optional: 每进一次while循环就是进入了新的一层。。

      for (let i = 0; i < len; i++) {
        let node = queue.shift();
        currLevel.push(node.val);
        //不同点在这：这里不再是 nooe.left node.right 而是用for-of循坏node.children
        for (let child of node.children) {
          if (child) queue.push(child);
        }
      }

      visitedNodes.push(currLevel);
    }

    return visitedNodes;
  };

*/

/****************************** 根据多叉树的遍历框架 改写出 图的BFS代码框架 ***************************/

// BFS遍历图的所有节点，从索引是startNodeIndex的节点开始进行BFS，且记录遍历的步数
var levelOrder = function (graph, srcIndex) {
  if (!graph) return [];

  let visitedNodes = [];
  let queue = [srcIndex];

  let visited = new Array(graph.length).fill(false); // <--- diff is here，用于标记每个节点是否已经被访问过，初始化为false
  visited[srcIndex] = true; // <--- diff is here
  // let step = 0;     //optional: 记录遍历的步数

  while (queue.length) {
    let nodeIdx = queue.shift();
    visitedNodes.push(nodeIdx); //更新visitedNodes, 记录被访问的节点索引

    // graph[nodeIdx]就是索引为nodeIdx的节点的邻居们。。。
    for (let neighbor of graph[nodeIdx]) {
      if (visited[neighbor.to] === false) {
        queue.push(neighbor.to);
        visited[neighbor.to] = true; // <--- diff is here
      }
    }
    // step++        //optional: 记录遍历的步数
  }

  return visitedNodes;
};
/* ----------------- 用例测试：Assuming graph is represented as an adjacency list -----------------
  const graph = [
      [{ to: 1 }, { to: 2 }],    // 节点 0 的邻居
      [{ to: 3 }],               // 节点 1 的邻居
      [{ to: 3 }, { to: 4 }],    // 节点 2 的邻居
      [],                        // 节点 3 没有邻居
      [{ to: 5 }],               // 节点 4 的邻居
      [],                        // 节点 5 没有邻居
  ];

  bfsTraversal_Graph(graph);  //输出被访问的节点索引：[0, 1, 3, 2, 4, 5]
*/
