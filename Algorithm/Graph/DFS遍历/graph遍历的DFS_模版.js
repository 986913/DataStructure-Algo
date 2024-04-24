/* 
  多叉树遍历框架：
  var traversal = function(root) {
      if (root == null) return;
      // 前序位置
      for (let child of node.children) {
        traversal(child);
      }
      // 后序位置
  };
*/
/****************************** 根据多叉树的遍历框架 改写出 图的DFS代码框架 ***************************/

/******************* 🟢 有环图（Cyclic） DFS遍历框架 ******************/
let visited = []; // 记录被遍历过的节点, 防止递归重复遍历同一个节点进入死循环
let onPath = []; // 记录从起点到当前节点的路径, onPath 用于判断是否成环

const traversal = (graph, s) => {
  if (visited[s]) return;

  visited[s] = true; // 经过节点s,标记为已遍历
  onPath[s] = true; // 在for循环外头 做选择: 标记节点s在路径上

  for (let neighbor of s的allNeighbors) {
    traversal(graph, neighbor); // 递归
  }

  onPath[s] = false; // 在for循环外头 s撤销选择: 节点s离开路径
};

// traversal(graph, 0);

/******************* 🟢 无环图（Acyclic) DFS遍历框架******************/

var 遍历AcyclicGraph = function (graph) {
  let allPaths = []; // 记录从起点到当前节点的路径

  const traversal = (graph, curIdx, curPath) => {
    //前序: 添加节点 curIdx 到路径
    curPath.push(curIdx);
    // 到达终点
    if (curIdx === graph.length - 1) {
      allPaths.push([...curPath]);
    }
    for (let node of graph[curIdx]) {
      traversal(graph, node, curPath); // 递归每个相邻节点
    }
    //后序: 从路径移出节点 curIdx
    curPath.pop();
  };

  traversal(graph, 0, []);
  return allPaths;
};
