/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

/* ----------------------------- 👍 用 Backtracking 模版 ----------------------------------- */
// 这道题没懂

const findItinerary = (tickets) => {
  let result = ['JFK'];
  let map = {};

  for (const tickt of tickets) {
    const [from, to] = tickt;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  //console.log(map);// { JFK: [ 'KUL', 'NRT' ], NRT: [ 'JFK' ] }

  for (const city in map) {
    // 对到达城市列表排序
    map[city].sort();
  }

  const backtracing = () => {
    if (result.length === tickets.length + 1) return true;
    if (
      !map[result[result.length - 1]] ||
      !map[result[result.length - 1]].length
    )
      return false;

    for (let i = 0; i < map[result[result.length - 1]].length; i++) {
      let city = map[result[result.length - 1]][i];
      // 删除已走过航线，防止死循环
      map[result[result.length - 1]].splice(i, 1);
      result.push(city);
      if (backtracing()) return true;

      result.pop();
      map[result[result.length - 1]].splice(i, 0, city);
    }
  };
  backtracing();

  return result;
};
