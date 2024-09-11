/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

/******************************* N-aryTree多叉树 PostOrder遍历框架*****************************/
var GetImportance = function (employees, id) {
  /* 1. build map:
    {
        1 => { importance: 5, subordinates: [ 2, 3 ] },
        2 => { importance: 3, subordinates: [] },
        3 => { importance: 3, subordinates: [] }
    } 
  */
  let map = new Map();
  employees.forEach((e) =>
    map.set(e.id, { importance: e.importance, subordinates: e.subordinates })
  );

  //2. dfs, return total importance of id's direct sub and in-direct sub
  const dfs = (map, id) => {
    const { importance, subordinates } = map.get(id) || {};
    if (subordinates.length === 0) return importance;

    let totalImportance = importance;
    for (let subId of subordinates) {
      totalImportance += dfs(map, subId);
    }
    return totalImportance;
  };

  return dfs(map, id);
};
