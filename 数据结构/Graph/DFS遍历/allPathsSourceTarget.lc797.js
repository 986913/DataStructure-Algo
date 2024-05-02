/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/****************** Solution: DFS 遍历思想 + backtracking (LC112,113,129,257,1475变形题) **************/

var allPathsSourceTarget = function (graph) {
  let allPathFrom0ToN = [];

  const traversal = (graph, curIdx, curPath) => {
    //前序: 添加节点 curIdx 到路径
    curPath.push(curIdx);
    // 到达终点
    if (curIdx === graph.length - 1) {
      allPathFrom0ToN.push([...curPath]);
    }
    for (let node of graph[curIdx]) {
      traversal(graph, node, curPath); // 递归每个相邻节点
    }
    //后序: 从路径移出节点 curIdx
    curPath.pop();
  };

  traversal(graph, 0, []);
  return allPathFrom0ToN;
};
