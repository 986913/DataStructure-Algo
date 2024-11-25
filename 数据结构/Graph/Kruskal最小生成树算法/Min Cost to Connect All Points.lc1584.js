/**
 * @param {number[][]} points
 * @return {number}

  所谓最小生成树，就是图中若干边的集合（称集合为 `mst`，最小生成树的英文缩写），你要保证这些边：
    1、包含图中的所有节点              ---- Union find 能做到
    2、形成的结构是树结构（即不存在环）  ---- Union find 能做到
    3、权重和最小                    ---- 贪心想法：将所有边按照权重 从小到大排序，从权重最小的边开始遍历：
                                          如果这条边和mst中的其它边不会形成环，则这条边是最小生成树的一部分. 将它加入mst集合
                                          否则，这条边不是最小生成树的一部分，不要把它加入mst集合。
 */

/*************************  Solution: Kruskal最小生成树 算法 (LC261变形题) ******************************/

var minCostConnectPoints = function (points) {
  // 共 points.length 个节点, 先生成所有的边connections
  let connections = [];
  let n = points.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let a = points[i];
      let b = points[j];
      let distance = Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
      connections.push([i, j, distance]);
    }
  }

  // 按照边权重从小到大排序（贪心）
  connections.sort((a, b) => a[2] - b[2]);

  // Kruskal 算法核心
  let mstWeight = 0;
  let uf = new UnionFound(n); // 因为节点总数为 n
  connections.forEach((edge) => {
    const [p, q, weight] = edge;
    if (uf.connected(p, q)) return; // 如果已经连通，跳过

    mstWeight += weight; // 累加权重
    uf.union(p, q); // 合并连通分量
  });

  return mstWeight; // 返回最小生成树的权重
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
