/**
  用BFS or DFS来检测课程之间是否存在环路，如果存在环路，则无法完成所有课程，否则可以完成所有课程。
  directed graph denotes: [precourse] --> [course]
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

/************************************ Solution1: BFS 👍👍  *******************************************/
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

/****************** Solution2: DFS遍历思想 + backtracking  **********************/
