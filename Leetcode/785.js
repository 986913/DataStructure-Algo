/**
 * @param {number[][]} graph
 * @return {boolean}
 */

/**************************************** DFS二分图判定模版(变形题) ********************************************/
var isBipartite = function (graph) {
  let visited = new Array(graph.length).fill(false);
  let color = new Array(graph.length).fill(false); // <-- diff is here: 记录图中节点的颜色，false和true 代表两种不同颜色
  let isErFenTu = true; // <-- diff is here:  记录图是否符合二分图性质

  // Helper function:
  const traverse = (graph, startIdx) => {
    // 如果已经确定不是二分图了，就不用浪费时间再递归遍历了
    if (isErFenTu === false) return;

    visited[startIdx] = true;
    for (let neigbor of graph[startIdx]) {
      //如果相邻节点neighbor没被访问过:
      if (!visited[neigbor]) {
        color[neigbor] = !color[startIdx]; // <--- 把邻居neighbor染成和当前startIdx节点不同的颜色啦
        traverse(graph, neigbor); //<--- 然后继续递归. input换成neighbor
      } else {
        //如果相邻节点neighbor已被访问过,那么应该比较节点neighbor和当前节点srcIndex的颜色
        if (color[neigbor] === color[startIdx]) {
          isErFenTu = false;
          return;
        }
      }
    }
  };

  /* Main function:
      因为图不一定是联通的，可能存在多个子图
			所以要把每个节点都作为起点进行一次遍历
      如果发现任何一个子图不是二分图，整幅图都不算二分图
    */
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      traverse(graph, i);
    }
  }
  return isErFenTu;
};
