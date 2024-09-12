/**
  对于图结构，遍历所有「路径」和遍历所有「节点」稍有不同。
    而对于图结构来说，由起点 `src` 到目标节点 `dest` 的路径可能不止一条。
    所以我们需要一个 `visited` 数组，在进入节点时（前序位置）标记为正在访问，退出节点时（后序位置）撤销标记，
    这样才能遍历图中的所有路径，从而找到 `src` 到 `dest` 的所有路径
 */

/***** 图路径的遍历框架： 遍历图中从srcIdx到destIdx中的所有路径 ******/

const preorderTraversal_Graph = (graph, srcIdx, destIdx) => {
  // boolean数组，每个元素表示图中相应节点是否在当前路径中
  let visited = new Array(graph.length).fill(false);
  let result = []; //保存从srcIdx到destIdx的所有路径

  const traversal = (graph, curPath, srcNodeIndex, destNodeIndex) => {
    if (srcNodeIndex < 0 || srcNodeIndex >= graph.length) return;
    if (visited[srcNodeIndex]) return; //防止陷入死循环

    // 前序位置
    visited[srcNodeIndex] = true;
    curPath.push(srcNodeIndex); // 记录被访问的节点索引

    // 找到了
    if (srcNodeIndex === destNodeIndex) {
      result.push([...curPath]);
    }

    for (let neighbor of graph[srcNodeIndex]) {
      traversal(graph, [...curPath], neighbor.to, destNodeIndex); //数组使用副本
    }

    //后序位置，backtracking
    curPath.pop();
    visited[srcNodeIndex] = false; // <-- diff is here
  };

  traversal(graph, [], srcIdx, destIdx); //起点是srcIdx，终点是destIdx
  return result;
};

/******************** 用例测试：Assuming graph is represented as an adjacency list ********************/
const graph = [[{ to: 1 }, { to: 2 }], [{ to: 3 }], [{ to: 3 }], []];
// 调用函数并打印所有路径
const paths = preorderTraversal_Graph(graph, 0, 3); // 输出所有路径: [ [0,1,3], [0,2,3] ]
