/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}

  树 VS 图：
    树：
      无环：树中不存在环。
      连通：所有节点都是连通的，任意两节点之间有且只有一条路径。
      边数：一个有 n 个节点的树必须有正好 n-1 条边。
      层级结构：通常表示层级关系（如家谱、文件夹结构）。
      单连通分量：树总是只有一个连通分量。
    图：
      可能有环：图中可以存在环。
      可能不连通：图可以是不连通的，可能有多个不连通的部分。
      边数：一个有 n 个节点的图，边数可以从 0 到 n(n-1)/2（在无向图中）。
      无严格结构：图可以表示任意的配对关系，不限于层级结构。
      多个连通分量：图可以有多个连通或不连通的分量
 */

/*************************   Solution: 直接用写好的 UnionFound class ******************************/
var validTree = function (n, edges) {
  // A tree must have exactly n-1 edges
  if (edges.length !== n - 1) return false;
  let uf = new UnionFound(n);
  for (let [a, b] of edges) {
    // If two nodes are already connected, there's a cycle, then not tree
    if (uf.connected(a, b)) return false;
    uf.union(a, b);
  }
  // After processing all edges, check if there's exactly 1 connected component
  return uf.count() === 1;
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
