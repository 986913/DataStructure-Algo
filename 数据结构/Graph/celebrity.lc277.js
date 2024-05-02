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

/***************************************** Solution 1: 暴力算法 *******************************************/
// 从头开始穷举，把每个人都视为名人候选人，判断当前celebrity是否符合「名人」的条件。

var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    for (let can = 0; can < n; can++) {
      let other;

      for (other = 0; other < n; other++) {
        if (other === can) continue; //排除自己认识自己。。

        //如果can认识other, 或者other不认识can， 那么can就不是名人
        if (knows(can, other) || !knows(other, can)) break;
      }

      //若other遍历完(当other等于n时) 代表所有人都认识can, 则can就是名人
      if (other === n) return can;
    }

    // 遍历完所有人，没有一个人符合名人特性
    return -1;
  };
};

/***************************************** 👍  Solution 2: 优化解法 *******************************************/
// 从头开始遍历，把每个人都视为候选人ppl，判断ppl是否符合「名人」的条件。

var solution = function (knows) {
  return function (n) {
    let can = 0; //先假设第一个人是名人候选人canidate

    for (let other = 1; other < n; other++) {
      //can认识other, 那么can不是名人， 那么要更新名人候选人can为other
      if (knows(can, other)) {
        can = other;
      }
    }

    //第一次for循环后的can不一定是名人，所以需要再一次forloop,看这个can是不是真正的名人

    for (let other = 0; other < n; other++) {
      if (other === can) continue; //排除自己认识自己

      //can不是名人的情况：can认识other  OR other不认识can
      if (knows(can, other) || !knows(other, can)) return -1; //说明can不是名人, 且没有名人了
    }

    return can; // 说明这个can是真正的名人
  };
};
