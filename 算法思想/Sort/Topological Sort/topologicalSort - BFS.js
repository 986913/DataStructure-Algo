/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/************************************** LC 207 ***************************************************/
var canFinish = function (numCourses, prerequisites) {
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
        queue.push(next); // update queue
      }
    }
  }

  return count === numCourses;
};
