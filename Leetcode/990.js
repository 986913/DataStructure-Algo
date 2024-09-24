/**
 * @param {string[]} equations
 * @return {boolean}
 */

/*************************   Solution: 直接用写好的 UnionFound class ******************************/
var equationsPossible = function (equations) {
  // 26 个英文字母
  let uf = new UnionFound(26);
  // 先让相等的字母形成连通分量
  for (let eq of equations) {
    if (eq.includes('==')) {
      const p = eq[0].charCodeAt(0) - 97; // 97 is "a".charCodeAt(0)
      const q = eq[3].charCodeAt(0) - 97;
      uf.union(p, q); // .connected(), .union() 都是让你传入数字（对应的整数索引) 这就是为啥要 eq[0].charCodeAt(0) - 97;
    }
  }
  // 检查不等关系是否打破相等关系的连通性
  for (let eq of equations) {
    if (eq.includes('!=')) {
      const p = eq[0].charCodeAt(0) - 97;
      const q = eq[3].charCodeAt(0) - 97;
      // 如果相等关系成立，就是逻辑冲突
      if (uf.connected(p, q)) return false;
    }
  }
  return true;
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
