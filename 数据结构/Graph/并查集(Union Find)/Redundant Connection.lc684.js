/**
 * @param {number[][]} edges
 * @return {number[]}
 */

/*************************   Solution: 直接用写好的 UnionFound class ******************************/
var findRedundantConnection = function (edges) {
  let uf = new UnionFound(edges.length);
  let lastAppear = [];

  edges.forEach((edge) => {
    const [p, q] = edge;
    if (uf.connected(p, q)) {
      // diff - update已连通的节点, forEach中的return不会跳出循环 会继续ongoing
      lastAppear = [p, q];
      return;
    }
    uf.union(p, q);
  });

  return lastAppear;
};

// Helper function:
class UnionFound {
  constructor(n) {
    this._count = n;
    this.parent = Array.from({ length: n }, (_, index) => index);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) return;
    this.parent[rootQ] = rootP;
    this._count--;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  count() {
    return this._count;
  }
}
