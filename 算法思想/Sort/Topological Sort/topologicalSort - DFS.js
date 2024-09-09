/**
  用BFS or DFS来检测课程之间是否存在环路，如果存在环路，则无法完成所有课程，否则可以完成所有课程。
  directed graph denotes: [precourse] --> [course]
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

/*************************** Solution1: 建图 + DFS遍历图路径，!无回溯（对应LC207 Solution1）****************************/
var findOrder = function (numCourses, prerequisites) {
  /* step1: build prerequisites to directed graph */
  const graph = buildDirectedGraph(numCourses, prerequisites);

  /* step2: 套用模版 - DFS遍历图路径 */
  let hasCycle = false;
  let visited = Array.from({ length: numCourses }, () => false); // visited是用来表示该节点是否已经被完全访问，因此不需要在递归结束后重置。
  let result = []; //<-- diff is here: To store the topological order

  const dfs = (graph, startIdx, curPath) => {
    //diff is here:
    if (curPath[startIdx]) {
      hasCycle = true;
      return;
    }
    if (hasCycle || visited[startIdx]) return;

    curPath[startIdx] = true; //<-- diff is here:
    for (let next of graph[startIdx]) {
      dfs(graph, next, curPath);
    }
    visited[startIdx] = true;
    curPath[startIdx] = false; //<-- diff is here:
    result.push(startIdx); //<-- diff is here:
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(
      graph,
      i,
      Array.from({ length: numCourses }, () => false)
    );
  }

  if (hasCycle) return [];
  return result.reverse(); //<-- diff is here:
};
// helper function:
const buildDirectedGraph = (numCourses, prerequisites) => {
  let graph = Array.from({ length: numCourses }, () => []);
  for (let [course, pre] of prerequisites) {
    const start = pre;
    let end = course;
    graph[start].push(end);
  }
  return graph;
};

/*************************** Solution2: 建图 + DFS遍历图路径 三色法（对应LC207 Solution2）****************************/
var findOrder = function (numCourses, prerequisites) {
  /* step1: build prerequisites to directed graph */
  const graph = buildDirectedGraph(numCourses, prerequisites);

  /* step2: 套用模版 - 改良版DFS遍历图路径-> DFS三色法检测环并生成拓扑排序 */
  let visited = Array.from({ length: numCourses }, () => 0); // 0: not visited, 1: visiting, 2: visited
  let result = []; // <--- diff is here

  const dfs = (startIdx) => {
    if (visited[startIdx] === 1) return true;
    if (visited[startIdx] === 2) return false;

    visited[startIdx] = 1;
    for (let next of graph[startIdx]) {
      if (dfs(next)) return true;
    }
    visited[startIdx] = 2;
    result.push(startIdx); // <--- diff is here
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return []; // <--- diff is here
  }

  return result.reverse(); // <--- diff is here
};
// helper function:
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
