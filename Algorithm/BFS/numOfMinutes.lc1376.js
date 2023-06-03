/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
/* ------------------------- solution 1: BFS ----------------------- */
var numOfMinutes = function (n, headID, manager, informTime) {
  //1. map manager to employee list:
  let tree = {}; // {manager: [direct employee1, direct employee2]}
  for (let i = 0; i < manager.length; i++) {
    if (i === headID) continue;

    let m = manager[i];
    if (!tree[m]) tree[m] = [];
    tree[m].push(i);
  }

  // 2. BFS:
  let queue = [[headID, 0]]; // [employee, time to inform the head]
  let result = 0;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [employee, currTime] = queue.shift();
      let children = tree[employee] || [];
      for (let child of children) {
        result = Math.max(result, informTime[employee] + currTime);
        queue.push([child, informTime[employee] + currTime]);
      }
    }
  }

  return result;
};
