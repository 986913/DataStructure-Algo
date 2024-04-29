/**
  用DFS来检测课程之间是否存在环路，如果存在环路，则无法完成所有课程，否则可以完成所有课程。

  directed graph denotes: [precourse] --> [course]
 */

/****************** Solution: DFS遍历思想 + backtracking  **********************/

var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []); // 用来表示课程之间的关系，每个课程的先修课程被存储在对应索引的数组中
  let visited = new Array(numCourses).fill(0); // 标记每个课程的访问状态，0表示未访问，1表示正在访问，2表示已访问。

  // build graph:
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }

  /****** helper function: 检查课程之间的关系是否存在环路 ******/
  function dfs(course) {
    if (visited[course] === 1) return false; // 如果当前课程正在访问中，则存在环路，返回false
    if (visited[course] === 2) return true; // 如果当前课程已经被访问过，则不需要再次访问，返回true

    visited[course] = 1; // 将当前课程标记为正在访问状态
    // 遍历当前课程的先修课程
    for (let pre of graph[course]) {
      if (!dfs(pre)) return false; // 递归地检查先修课程的先修课程，如果存在环路，则返回false
    }
    visited[course] = 2; // 将当前课程标记为已访问状态

    return true; // 当前课程不存在环路，返回true
  }

  /****** Main function:  遍历所有课程, 对每个课程应用DFS，如果发现存在环路，则返回false  ******/
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true; // 如果所有课程都能够完成，则返回true
};
