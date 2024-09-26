/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */

/******************* Solution1: 检查入度 + union found检测成环 （LC261变形题） ********************/
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  // step1: create indegree, only root has indegree 0, other has indegree 1
  const indegree = createIndegree(n, leftChild, rightChild);
  let zeroIndegreeCount = 0;
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) zeroIndegreeCount++;
    else if (indegree[i] > 1) return false;
  }
  /*
    zeroIndegreeCount === 0 是这个case:
              0
            /   \
          1       2

    0 -> 1
    0 -> 2
    1 -> 0
    2 -> 0
    有0个节点入度都是0 （0节点入度是2， 1节点入度是1,  2节点入度是1 ）
    ------------------------------------------------------------
    zeroIndegreeCount > 1 是这个case:
              0      2
            /         \
          1            3

    0 -> 1
    3 -> 3
    有两个节点(0和2)入度都是0
  */
  if (zeroIndegreeCount === 0 || zeroIndegreeCount > 1) return false;

  // step2:  use union find to check for single 1 connected component.
  let uf = new UnionFound(n);
  for (let i = 0; i < n; i++) {
    if (leftChild[i] !== -1) {
      uf.union(leftChild[i], i);
    }
    if (rightChild[i] !== -1) {
      uf.union(rightChild[i], i);
    }
  }
  return uf.count() === 1; //合理的树最终connected component个数就是1
};

// Helper function:
const createIndegree = (n, leftChild, rightChild) => {
  let indegree = Array.from({ length: n }, () => 0);
  leftChild.forEach((child) => {
    if (child !== -1) indegree[child]++;
  });
  rightChild.forEach((child) => {
    if (child !== -1) indegree[child]++;
  });
  return indegree;
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

    this.parent[rootQ] = root; // 将两个不同集合合并
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
