/**
  用BFS or DFS来检测课程之间是否存在环路，如果存在环路，则无法完成所有课程，否则可以完成所有课程。
  directed graph denotes: [precourse] --> [course]
 */

/************************************ Solution: BFS 👍👍  ************************************************************/
const canFinish = (numCourses, prerequisites) => {
  /* Step1: Build the graph and indegree array to represent course dependencies: 构建图结构和入度数组。graph记录每门课程作为先决条件影响哪些后续课程，indegree记录每门课程有多少先决条件 */
  const { graph, indegree } = buildGraphAndIndegree(numCourses, prerequisites);

  /* Step2: Initialize BFS queue with courses that have no prerequisites (indegree === 0) 初始化队列，把所有入度为0的课程加入队列（即没有先决条件的课程）*/
  let queue = [];
  indegree.forEach((degree, index) => {
    if (degree === 0) queue.push(index);
  });

  /* Step3: Start BFS traversal to check if all courses can be finished. 使用BFS处理队列中的课程，依次处理每门课并减少依赖它的课程的入度。如果某课程入度减为 0，则把它加入队列*/
  let count = 0; // Track number of courses processed
  while (queue.length) {
    let cur = queue.shift(); // Dequeue a course
    count++; // Increment count for each course with no prerequisites or whose prerequisites are met

    // Process the next courses dependent on the current one
    for (let next of graph[cur]) {
      indegree[next]--; // Reduce the indegree of dependent courses
      if (indegree[next] === 0) {
        queue.push(next); // If the dependent course has no remaining prerequisites, add it to the queue
      }
    }
  }

  /* Step4:  If count matches numCourses, all courses can be finished.如果队列处理过的课程数量与总课程数量相同，说明所有课程都可以完成，否则存在循环依赖*/
  return count === numCourses;
};

/* Helper function to build the directed graph and indegree array:
  - Graph: an adjacency list where graph[i] contains all courses dependent on course i
    邻接表graph长这样：[ [所有以课0为先决条件的后续课程们], [所有以课1为先决条件的后续课程们] ]
                                    |                             |
                                课0 index                       课1 index

  - Indegree: an array where indegree[i] indicates how many prerequisites course i has
    indegree长这样: [ [课0的入度数], [课1的入度数] ]
                          |             |
                      课0 index      课1 index
*/
const buildGraphAndIndegree = (numCourses, prerequisites) => {
  let graph = Array.from({ length: numCourses }, () => []);
  let indegree = Array.from({ length: numCourses }, () => 0);

  // Build the graph and indegree array from the prerequisites list
  for (let [course, pre] of prerequisites) {
    let start = pre;
    let end = course;

    graph[start].push(end);
    indegree[end]++; // <-- diff is here
  }

  return {
    graph,
    indegree,
  };
};
