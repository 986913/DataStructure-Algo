/************************ 有环图（cyclic） 遍历框架 ***********************************/
let visited = []; // 记录被遍历过的节点
let onPath = []; // 记录从起点到当前节点的路径

const traversal = (graph, s) => {
  if (visited[s]) return;
  visited[s] = true; // 经过节点s,标记为已遍历
  onPath[s] = true; // 在for循环外头 做选择: 标记节点s在路径上

  for (let neighbor of s的allNeighbors) {
    traversal(graph, neighbor); // 递归
  }

  onPath[s] = false; // 在for循环外头 s撤销选择: 节点s离开路径
};

/************************ 无环图（acyclic) 遍历框架 ***********************************/
let allPaths = []; // 记录从起点到当前节点的路径
const traversal = (graph, idx, curPath) => {
  //前序位置
  curPath.push(idx);
  if (idx === graph.length - 1) {
    allPaths.push([...curPath]);
  }
  for (let node of graph[idx]) {
    traversal(graph, node, curPath);
  }
  //后序位置
  curPath.pop();
};

// traversal(graph, 0, [])
