/************************************* LC211变形题 **************************************************/

class TrieNode {
  constructor() {
    this.children = Array.from({ length: 26 }).fill(null);
    this.isWord = false; // 它用来表示从根节点到当前节点是否构成了一个完整的单词。
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let idx = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (node.children[idx] === null) {
        node.children[idx] = new TrieNode();
      }
      node = node.children[idx];
    }
    node.isWord = true; // 在单词的最后一个字符处标记为一个完整单词
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let idx = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (node.children[idx] === null) return false;
      node = node.children[idx];
    }
    return node.isWord; // 检查最后一个字符节点是否标记为一个完整单词
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let idx = prefix.charCodeAt(i) - 'a'.charCodeAt(0);
      if (node.children[idx] === null) return false;
      node = node.children[idx];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
