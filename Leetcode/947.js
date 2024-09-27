/**
 * @param {number[][]} stones
 * @return {number}

  下面双循环作用 - 是为了遍历所有石头的配对，并保证每对石头都进行比较，避免漏掉任何可以合并的石头：
    i = 0 时，我们比较 stones[0] 与 stones[1], stones[2], stones[3]，看它们是否共享行或列。
    i = 1 时，我们比较 stones[1] 与 stones[2], stones[3]，继续检查。
    i = 2 时，只剩下 stones[3] 需要比较
 */

/*************************   Solution: 直接用写好的 UnionFound class ******************************/
var removeStones = function (stones) {
  let uf = new UnionFound(stones.length);
  //注意遍历是stones数组的length:
  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      // Check if the two stones share the same row or column
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        uf.union(i, j);
      }
    }
  }
  return stones.length - uf.count();
};
// Helper class:
class UnionFound {
  // n 为图中节点的个数
  constructor(n) {
    // 连通分量个数
    this._count = n;
    // 存储每个节点的父节点：相当于指向父节点的指针，所以parent数组内实际存储着一个森林（若干棵多叉树）。
    this.parent = Array.from({ length: n }, (_, index) => index);
  }
  //查找元素x所属于的集合的代表元素（也叫根节点）：
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); //- 这里有路径压缩：保证任意树的高度保持在常数，使得各个API时间复杂度为O(1)
    }
    return this.parent[x];
  }

  // 将节点 p 和节点 q 连通
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) return;

    this.parent[rootQ] = rootP; // 将两个不同集合合并
    this._count--; // 两个连通分量合并成一个连通分量
  }
  // 判断节点 p 和节点 q 是否连通
  connected(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    return rootP === rootQ;
  }
  // 返回图中的连通分量个数
  count() {
    return this._count;
  }
}
