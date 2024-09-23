/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

/*************************   Solution: 直接用写好的 UnionFound class ******************************/
var countComponents = function (n, edges) {
  let uf = new UnionFound(n);
  for (let [a, b] of edges) {
    uf.union(a, b);
  }
  return uf.count();
};

// Helper class:
class UnionFound {
    // n 为图中节点的个数
    constructor(n) {
        // 连通分量个数
        this._count = n
        // 存储每个节点的父节点：相当于指向父节点的指针，所以parent数组内实际存储着一个森林（若干棵多叉树）。
        this.parent = Array.from({ length: n }, (_, index) => index)
    }
    //查找元素x所属于的集合的代表元素（也叫根节点）：
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);  //- 这里有路径压缩：保证任意树的高度保持在常数，使得各个API时间复杂度为O(1)
        }
        return this.parent[x]
    }

    // 将节点 p 和节点 q 连通
    union(p, q) {
        const rootP = this.find(p)
        const rootQ = this.find(q)
        if (rootP === rootQ) return

        this.parent[rootQ] = rootP；// 将两个不同集合合并
        this._count-- // 两个连通分量合并成一个连通分量
    }
    // 判断节点 p 和节点 q 是否连通
    connected(p, q) {
        const rootP = this.find(p)
        const rootQ = this.find(q)
        return rootP === rootQ
    }
    // 返回图中的连通分量个数
    count() {
        return this._count
    }
}