/**
  用BFS or DFS来检测课程之间是否存在环路，如果存在环路，则无法完成所有课程，否则可以完成所有课程。
  directed graph denotes: [precourse] --> [course]
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
/******************************** Solution1️⃣: 建图 + DFS遍历图路径，!无回溯（对应LC207 Solution1）****************************/
const findOrder = (numCourses, prerequisites) => {
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
// Helper function:
const buildDirectedGraph = (numCourses, prerequisites) => {
  let graph = Array.from({ length: numCourses }, () => []);
  for (let [course, pre] of prerequisites) {
    const start = pre;
    let end = course;
    graph[start].push(end);
  }
  return graph;
};

/********************************* Solution2️⃣: 建图 + DFS遍历图路径 三色法（对应LC207 Solution2）****************************/
const findOrder = (numCourses, prerequisites) => {
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
// Helper function:
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

/********************************* Solution3️⃣: BFS拓扑排序 👍👍 对应LC207 Solution3 ***************************************/
const findOrder = (numCourses, prerequisites) => {
  // 1. 建graph 和 indegree
  const { graph, indegree } = buildGraphAndIndegree(numCourses, prerequisites);
  let result = []; // <-- diff is here

  //2. 找到有向图的入口，(入度为0的点)
  let queue = [];
  indegree.forEach((degree, index) => {
    if (degree === 0) queue.push(index);
  });

  //3. BFS拓扑排序
  let count = 0;
  while (queue.length) {
    let cur = queue.shift();
    result[count] = cur; // <-- diff is here
    count++;

    //得到且遍历当前课的所有后续课
    for (let next of graph[cur]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  //返回结果
  return count === numCourses ? result : []; // <-- diff is here
};
// Helper function:
const buildGraphAndIndegree = (numCourses, prerequisites) => {
  let graph = Array.from({ length: numCourses }, () => []);
  let indegree = Array.from({ length: numCourses }, () => 0);

  for (let [course, pre] of prerequisites) {
    let start = pre;
    let end = course;

    graph[start].push(end);
    indegree[end]++;
  }

  return {
    graph,
    indegree,
  };
};
