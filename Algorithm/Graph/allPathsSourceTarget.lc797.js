/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/************************Solution: 图的遍历框架 ***********************************/
var allPathsSourceTarget = function (graph) {
  let allPaths = [];

  const traversal = (graph, idx, curPath) => {
    curPath.push(idx);
    let n = graph.length;
    if (idx === n - 1) {
      allPaths.push([...curPath]);
    }

    for (let node of graph[idx]) {
      traversal(graph, node, curPath);
    }

    curPath.pop();
  };

  traversal(graph, 0, []);
  return allPaths;
};
