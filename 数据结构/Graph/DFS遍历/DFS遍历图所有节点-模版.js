/****************************** 多叉树的遍历框架 **************************
  const preorderTraversal_Nary = (root) => {
    let visitedNodes = [];

    const traversal = (node) => {
      if (!node) return;

      //前序位置, console.log('进入节点 ' + node);
      visitedNodes.push(node.val);
      for (let child of node.children) {
        traversal(child);
      }
      //后序位置, console.log('离开节点 ' + node);
    };

    traversal(root);
    return visitedNodes;
  };

  /** Definition for a Node:
    function Node(val,children) {
      this.val = val;
      this.children = children;
    };
 */

/****************************** 根据多叉树的遍历框架 改写出 图的DFS代码框架 ***************************/

const bfsTraversal_Graph = (graph) => {
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

    // graph[srcIndex]就是索引为srcIndex的节点的邻居们。。。
    for (let neighbor of graph[srcIndex]) {
      traversal(graph, neighbor.to);
    }
    // 后序位置（如果需要，可在这里添加逻辑）
  };

  traversal(graph, 0);
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

  bfsTraversal_Graph(graph);  //输出被访问的节点索引：[0, 1, 3, 2, 4, 5]s
*/
