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

/************************************ Solution3: BFS 👍👍  *******************************************/
var findOrder = function (numCourses, prerequisites) {
  // 1. 建graph 和 indegree
  let graph = new Map();
  let indegree = new Array(numCourses).fill(0);
  let result = []; // <-- diff is here

  for (let [course, pre] of prerequisites) {
    let start = pre;
    let end = course;
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
    result[count] = node; // <-- diff is here
    count += 1;

    //得到且遍历当前node的所有后续课
    let nextCourses = graph.get(node) || [];
    for (let next of nextCourses) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return count === numCourses ? result : []; // <-- diff is here
};
