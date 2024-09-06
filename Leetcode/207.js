/**
  用BFS or DFS来检测课程之间是否存在环路，如果存在环路，则无法完成所有课程，否则可以完成所有课程。
  directed graph denotes: [precourse] --> [course]
 */

/************************************ Solution1: 建图 + DFS遍历图路径 （会超时） *******************************************/
const canFinish = (numCourses, prerequisites) => {
  /* step1: build prerequisites to directed graph */
  const graph = buildDirectedGraph(numCourses, prerequisites);

  /* step2: 套用模版 - DFS遍历图路径 */
  let hasCycle = false;
  let visited = Array.from({ length: numCourses }, () => false); //visited是用来检测环的递归堆栈状态，所以需要在递归结束后重置为 false，以便正确检测到环。

  const dfs = (graph, startIdx) => {
    if (hasCycle) return; // 如果已经检测到环，则提前终止
    // 遇到正在遍历的节点，说明出现了环
    if (visited[startIdx]) {
      hasCycle = true;
      return;
    }

    visited[startIdx] = true; // 标记节点为正在遍历
    for (let next of graph[startIdx]) {
      dfs(graph, next);
    }
    visited[startIdx] = false; //回溯： 递归结束后恢复节点状态
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(graph, i);
  }

  return !hasCycle;
};
// Helper function to build a directed graph: 构建邻接表, graph长这样：[ 先修课1:[所有以该先修课1为先决条件的后续课程们], 先修课2:[所有以该先修课2为先决条件的后续课程们],]
const buildDirectedGraph = (numCourses, prerequisites) => {
  // 图中共有 numCourses 个节点
  let graph = Array.from({ length: numCourses }, () => []);
  for (let [course, pre] of prerequisites) {
    const start = pre;
    let end = course;
    graph[start].push(end);
  }
  return graph;
};

/************************* Solution2:  建图 + 解法1的 DFS遍历图路径改良版 (DFS三色法) **********************/
const canFinish = (numCourses, prerequisites) => {
  /* step1: build prerequisites to directed graph */
  const graph = buildDirectedGraph(numCourses, prerequisites);

  /* step2: 套用模版 - 改良版DFS遍历图路径->DFS三色法 */
  let visited = Array.from({ length: numCourses }, () => 0); // 0: not visited, 1: visiting, 2: visited

  // DFS function to detect cycles
  const dfs = (startIdx) => {
    if (visited[startIdx] === 1) return true; // cycle detected
    if (visited[startIdx] === 2) return false; // no cycle in this path

    visited[startIdx] = 1; // mark current node as visiting
    for (let next of graph[startIdx]) {
      if (dfs(next)) return true; // if a cycle is detected, return true
    }
    visited[startIdx] = 2; // mark current node as fully visited
    return false; // no cycle detected
  };

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false; // if a cycle is detected, return false
  }

  return true; // no cycles detected
};
// Helper function to build a directed graph
const buildDirectedGraph = (numCourses, prerequisites) => {
  let graph = Array.from({ length: numCourses }, () => []);
  for (let [course, pre] of prerequisites) {
    graph[pre].push(course); // build graph as adjacency list
  }
  return graph;
};

/************************************ Solution3: BFS 👍👍  *******************************************/
const canFinish = (numCourses, prerequisites) => {
  // 1. 建graph 和 indegree
  let graph = new Map(); // 图记录哪些课程是有依赖关系： { 先修课： [ 所有以该先修课为先决条件的后续课程们 ] }
  let indegree = new Array(numCourses).fill(0); //每门课的入度/有多少指向我   方向是（后续课 <-- 先修课）

  for (let [course, pre] of prerequisites) {
    let start = pre;
    let end = course;
    /*
        拿prerequisites = [[1后续课,0先修课],[2后续课,4先修课],[3后续课,2先修课]]举例，
        图的方向是: 后续课 <-- 先修课  后续课的入度有所增加
            indegree长这样： [0,1,1,1,0]
            图就长这样: { 先修课： [ 所有以该先修课为先决条件的后续课程们 ] }
            {
                0 => [1],
                4 => [2]
                2 => [3]
            }
      */
    graph.set(start, [...(graph.get(start) || []), end]);
    indegree[end]++;
  }

  //2. 找到有向图的入口，(入度为0的点)
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  //3. BFS拓扑排序
  let count = 0;
  while (queue.length) {
    let node = queue.shift();
    count += 1;

    //得到且遍历当前node的所有后续课,
    let nextCourses = graph.get(node) || [];
    for (let next of nextCourses) {
      indegree[next]--; // update indegree
      if (indegree[next] === 0) {
        queue.push(next); // 当indegree为0了！ 才update queue
      }
    }
  }

  return count === numCourses;
};
