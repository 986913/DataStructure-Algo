/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/************************************** LC 207 ***************************************************/

var canFinish = function (numCourses, prerequisites) {
  // 1. 建图 和 visited
  let graph = new Map(); // 用来表示课程之间的关系，每个课程的先修课程被存储在对应索引的数组中
  let visited = new Array(numCourses).fill(0); // 标记每个课程的访问状态，0表示未访问，1表示正在访问，2表示已访问。

  for (let [course, pre] of prerequisites) {
    let start = pre;
    let end = course;
    /*
        拿prerequisites = [[1后续课,0先修课],[2后续课,4先修课],[3后续课,2先修课]]举例，
        图的方向是: 后续课 <-- 先修课 
        图就长这样: { 先修课： [ 所有以该先修课为先决条件的后续课程们 ] }
            {
                0 => [1],
                4 => [2]
                2 => [3]
            }
      */
    graph.set(start, [...(graph.get(start) || []), end]);
  }

  /******** 2. helper function: 检查课程之间的关系是否存在环路 ******/
  function dfs(course) {
    if (visited[course] === 1) return false; // 如果当前课正在访问中(in-progress)，则存在环路，返回false
    if (visited[course] === 2) return true; // 如果当前课已经被访问过(visited)，则不需要再次访问，返回true

    visited[course] = 1; // 将当前课程标记为正在访问状态
    //得到且遍历当前课的所有后续课：
    let nextCourses = graph.get(course) || [];
    for (let next of nextCourses) {
      if (!dfs(next)) return false; // 递归地检查当前课的后续课程，如果存在环路，则返回false
    }
    visited[course] = 2; // 将当前课程标记为已访问状态

    return true; // 当前课程不存在环路，返回true
  }

  /****** 3. 所有unvisted点展开. 🟢Main function:遍历所有课程, 对每个课程应用DFS，如果发现存在环路，则返回false  ******/
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true; // 如果所有课程都能够完成，则返回true
};
