/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */

/*************************   Solution: 直接用写好的 UnionFound class ******************************/
var areSentencesSimilarTwo = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;

  // Step1: Map to store string to integer mapping (因为.union, .connected接受数字，而不是string!)
  const map = new Map();
  let id = 0; // 给每个单词分配一个节点 id，方便进行并查集操作
  // Assign each unique word a unique integer ID
  for (let [word1, word2] of similarPairs) {
    if (!map.has(word1)) map.set(word1, id++);
    if (!map.has(word2)) map.set(word2, id++);
  }
  // Make sure to include sentence1 and sentence2 in the mapping
  for (let word of [...sentence1, ...sentence2]) {
    if (!map.has(word)) map.set(word, id++);
  }

  // Step2: Create UnionFind with total unique words
  let uf = new UnionFound(id);
  // Union operation using integer IDs
  for (let [word1, word2] of similarPairs) {
    uf.union(map.get(word1), map.get(word2));
  }
  // Check if corresponding words in sentence1 and sentence2 are connected
  for (let i = 0; i < sentence1.length; i++) {
    if (!uf.connected(map.get(sentence1[i]), map.get(sentence2[i]))) {
      return false;
    }
  }

  return true;
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
