/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/**********+++*** Solution: DFS 遍历思想 + backtracking (LC112,113,129,257,1475变形题) **************/
var allPathsSourceTarget = function (graph) {
  let allPaths = [];

  const traversal = (graph, start, curPath) => {
    //前序
    curPath.push(start);
    if (start === graph.length - 1) {
      allPaths.push([...curPath]);
    }
    for (let node of graph[start]) {
      traversal(graph, node, curPath);
    }
    //后序
    curPath.pop();
  };

  traversal(graph, 0, []);
  return allPaths;
};
