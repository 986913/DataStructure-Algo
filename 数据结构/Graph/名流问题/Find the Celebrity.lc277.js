/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
/*
  所谓「名人」有两个条件：(名人节点的出度为0，入度为 n-1)
    1、所有其他人都认识「名人」
    2、「名人」不认识任何其他人

  把名流问题描述成算法的形式就是这样的：
    给你输入一个大小为 n x n 的二维数组（邻接矩阵）graph 表示一幅有 n 个节点的图，每个人都是图中的一个节点，编号为 0 到 n - 1。
    如果 graph[i][j] == 1 代表第 i 个人认识第 j 个人，
    如果 graph[i][j] == 0 代表第 i 个人不认识第j个人。

  此题不过并不是直接把邻接矩阵传给你，而是只告诉你总人数 n，
  同时提供一个 API knows 来查询人和人之间的社交关系：var knows = function(i, j) {}; // 可以直接调用，能够返回i是否认识j
 */

/************************************ Solution 1.1: 建indegree & outdegree **********************************/
var solution = function (knows) {
  return function (n) {
    let inDegree = new Array(n).fill(0); // 被认识的次数
    let outDegree = new Array(n).fill(0); // 认识别人的次数

    // 遍历所有的关系并更新 inDegree 和 outDegree
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i !== j && knows(i, j)) {
          outDegree[i]++; // i 认识 j
          inDegree[j]++; // j 被 i 认识
        }
      }
    }

    // 查找是否有一个人满足名人条件
    for (let i = 0; i < n; i++) {
      if (inDegree[i] === n - 1 && outDegree[i] === 0) {
        return i;
      }
    }

    return -1; // 没有找到名人
  };
};

/***************************************** Solution 1.2: 暴力算法 *******************************************/
// 从头开始穷举，把每个人都视为名人候选人，判断当前celebrity是否符合「名人」的条件。
var solution = function (knows) {
  return function (n) {
    for (let i = 0; i < n; i++) {
      let isCelebrity = true; // 假设 i 是名人

      for (let j = 0; j < n; j++) {
        if (i === j) continue; //排除自己认识自己。。
        if (knows(i, j) || !knows(j, i)) {
          isCelebrity = false;
          break; // i 不是名人，跳到下一个人
        }
      }
      // 如果经过检查 i 符合名人条件，返回 i
      if (isCelebrity) return i;
    }

    // 如果没有人符合名人条件，返回 -1
    return -1;
  };
};

/***************************************** 👍  Solution 2: 优化解法 *******************************************/
// 从头开始遍历，把每个人都视为候选人ppl，判断ppl是否符合「名人」的条件。
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let candidate = 0;

    // 1. 找出一个潜在的名人
    for (let i = 1; i < n; i++) {
      if (knows(candidate, i)) {
        candidate = i; // candidate 认识 i，所以 candidate 不可能是名人
      }
    }

    // 2. 验证这个潜在的名人
    for (let i = 0; i < n; i++) {
      if (i !== candidate && (knows(candidate, i) || !knows(i, candidate))) {
        return -1; // 如果有任何人不认识 candidate 或 candidate 认识其他人，那么 candidate 不是名人
      }
    }

    return candidate; // 找到了名人
  };
};
