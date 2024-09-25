/**
 * @param {number[][]} isConnected
 * @return {number}
 */

/*************************   Solution1: 直接用写好的 UnionFound class ******************************/
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let uf = new UnionFound(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }
  return uf.count();
};
// Helper function:
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

/*************************   Solution2: DFS遍历图节点模版 变形题 **************************************/
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = new Array(n).fill(false); // 记录哪些城市被访问过
  let count = 0; // 记录连通分量数量

  // Helper function:
  const dfs = (matrix, startIdx) => {
    visited[startIdx] = true; // 标记当前城市为已访问

    /* diff is here：
        不再是dfs当前startIdx城市的所有邻居了，
        而是基于题目给定的“城市之间的直接连通性”去选择性的DFS
    */
    for (let j = 0; j < matrix.length; j++) {
      // 如果城市startIdx和城市j直接相连，并且j尚未访问，则进行递归DFS
      if (matrix[startIdx][j] === 1 && !visited[j]) {
        dfs(matrix, j);
      }
    }
  };

  //Main function:
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++; // 每次新的 DFS 代表发现了一个新的连通分量
      dfs(isConnected, i); // 从该城市开始进行 DFS
    }
  }

  return count;
};

/*************************   Solution3: BFS遍历图节点模版 变形题 **************************************/
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = new Array(n).fill(false);
  let count = 0;
  // BFS Helper function <--- diff
  const bfs = (startIdx) => {
    let queue = [startIdx];
    visited[startIdx] = true;
    while (queue.length) {
      let curr = queue.shift();
      for (let j = 0; j < n; j++) {
        if (isConnected[curr][j] === 1 && visited[j] === false) {
          queue.push(j);
          visited[j] = true;
        }
      }
    }
  };

  //Main function:
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      bfs(i); // <--- diff
    }
  }
  return count;
};
