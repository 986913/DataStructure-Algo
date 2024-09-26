/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}

  Union-Find 不需要提前找出哪个节点是根，因为通过合并操作会动态确定每个节点的父节点，最终形成一个连通分量，并确保没有环。
  在DFS方法中，我们需要显式地知道哪个节点是根节点来从它开始遍历，但Union-Find通过动态追踪各个节点的父节点隐式解决了这一点。
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

/******************* Solution2: 检查入度 + DFS遍历树检测成环   （LC261变形题） ********************/
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  // step1: create indegree
  const indegree = createIndegree(n, leftChild, rightChild);

  // Identify the root node (node with indegree 0)
  let root = -1;
  let zeroIndegreeCount = 0;
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      root = i;
      zeroIndegreeCount++;
    } else if (indegree[i] > 1) {
      return false; // Invalid if any node has indegree > 1
    }
  }
  // There must be exactly one root node
  if (zeroIndegreeCount !== 1) return false;

  // step2: use dfs to traverse tree to detect cycle
  let hasCycle = false;
  let visited = Array.from({ length: n }, () => false);
  const dfs = (rootIdx) => {
    if (rootIdx === -1 || hasCycle) return; // Base case, stop at null nodes
    if (visited[rootIdx]) {
      hasCycle = true;
      return;
    }

    visited[rootIdx] = true;
    dfs(leftChild[rootIdx]);
    dfs(rightChild[rootIdx]);
  };

  dfs(root); // Start DFS from the root node
  if (hasCycle) return false;
  // Ensure all nodes are visited
  const hasUnvisitedNode = visited.includes(false);
  if (hasUnvisitedNode) return false;

  return true;
};
// Helper function to create indegree array
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
