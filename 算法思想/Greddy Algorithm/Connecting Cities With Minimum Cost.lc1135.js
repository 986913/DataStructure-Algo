/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}

  所谓最小生成树，就是图中若干边的集合（称集合为 `mst`，最小生成树的英文缩写），你要保证这些边：
    1、包含图中的所有节点              ---- Union find 能做到
    2、形成的结构是树结构（即不存在环）  ---- Union find 能做到
    3、权重和最小                    ---- 贪心想法：将所有边按照权重 从小到大排序，从权重最小的边开始遍历：
                                          如果这条边和mst中的其它边不会形成环，则这条边是最小生成树的一部分. 将它加入mst集合
                                          否则，这条边不是最小生成树的一部分，不要把它加入mst集合。
 */

/*************************  Solution: Kruskal最小生成树 算法  ******************************/
var minimumCost = function (n, connections) {
  // 城市编号为 1...n，所以初始化大小为 n + 1
  let uf = new UnionFound(n + 1);

  // diff --> 对所有边按照权重从小到大排序 （贪心）
  connections.sort((a, b) => a[2] - b[2]);

  // diff --> 记录最小生成树的权重之和
  let mstWeight = 0;

  connections.forEach((edge) => {
    const [p, q, weight] = edge;
    // 若这条边会产生环，则不能加入 mst
    if (uf.connected(p, q)) return;

    // 若这条边不会产生环，则属于最小生成树
    mstWeight += weight;
    uf.union(p, q);
  });

  /* 
    保证所有节点都被连通, 按理说 uf.count() == 1 说明所有节点被连通
    但因为节点 0 没有被使用，所以 0 会额外占用一个连通分量
  */
  return uf.count() === 2 ? mstWeight : -1;
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
