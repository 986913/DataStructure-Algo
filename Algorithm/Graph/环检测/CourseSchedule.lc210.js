/**
  用DFS来检测课程之间是否存在环路，如果存在环路，则无法完成所有课程，否则可以完成所有课程。

  directed graph denotes: [precourse] --> [course]
 */

/****************** Solution: DFS遍历思想 + backtracking  LC207变形题 **********************/

var findOrder = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []);
  let visited = new Array(numCourses).fill(0);
  let result = []; // <-- diff is here

  // build graph:
  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }

  /****** helper function ******/
  function dfs(course) {
    if (visited[course] === 1) return false;
    if (visited[course] === 2) return true;

    visited[course] = 1;
    for (let pre of graph[course]) {
      if (!dfs(pre)) return false;
    }
    visited[course] = 2;
    result.push(course); // <-- diff is here

    return true;
  }

  /****** Main function ******/
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return []; // <-- diff is here如果存在环路，则返回空数组
  }

  return result; // <-- diff is here 返回上课程的顺序
};
