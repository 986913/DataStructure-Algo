/****************************** 多叉树的遍历框架 **************************
var preorderTraversal_Nary = function (root, targetNode) {

  if (!root) return [];
  let result = [];       //保存所有找到targetNode的所有路径
  
  const traverse = (node, curPath) => {
    if (!node) return;
  
    //前序位置
    curPath.push(node.val);
    // 找到了
    if (curSum === targetNode.value) {
      result.push([...curPath]);
    }
    for (let child of node.children) {
      traversal(child, [...curPath]); // 数组使用副本
    }
    //后序位置，backtracking
    curPath.pop();
  };

  traverse(root, []);
  return result;
};

  /** Definition for a Node:
    function Node(val,children) {
      this.val = val;
      this.children = children;
    };
 */

/****************************** 根据多叉树的遍历框架 改写出 图的DFS代码框架 ***************************/
const preorderTraversal_Graph = (graph, srcIdx, destIdx) => {
  // boolean数组，每个元素表示图中相应节点是否在当前路径中
  let visited = new Array(graph.length).fill(false);
  let result = []; //保存所有找到destIdx的路径

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
    // graph[srcNodeIndex]就是索引为srcNodeIndex的节点的邻居们。。。
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

/* ----------------- 用例测试：Assuming graph is represented as an adjacency list -----------------
  const graph = [
      [{ to: 1 }, { to: 2 }],    // 节点 0 的邻居
      [{ to: 3 }],               // 节点 1 的邻居
      [{ to: 3 }],               // 节点 2 的邻居
      [],                        // 节点 3 没有邻居
  ];

  preorderTraversal_Graph(graph, 0, 3);  //输出所有路径: [ [0,1,3], [0,2,3] ]
*/
