/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

/* ------------ Solution : 👍 BFS 模版 (Graph problem)----------------------------*/
const openLock = (deadends, target) => {
  let dead = new Set(); // 记录需要跳过的死亡密码
  let visited = new Set(); //记录已经穷举过的密码

  visited.add('0000');
  deadends.forEach((n) => dead.add(n));
  let queue = ['0000'];
  let depth = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node === target) return depth;
      if (dead.has(node)) continue; // 跳过死亡密码

      /* 将一个节点的未遍历相邻节点加入队列 (for each wheel) */
      for (let j = 0; j < 4; j++) {
        /* ？？ 内循环没搞懂 */
        for (let d = -1; d <= 1; d += 2) {
          let y = (node[j] - '0' + d + 10) % 10;
          let nei = node.substring(0, j) + ('' + y) + node.substring(j + 1);

          if (!visited.has(nei)) {
            visited.add(nei);
            queue.push(nei);
          }
        }
      }
    }
    depth++;
  }

  return -1;
};
