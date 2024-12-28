/************************************* LC211变形题 **************************************************/

class TrieNode {
  constructor() {
    this.children = Array.from({ length: 26 }).fill(null);
    this.isWord = false; // 表示从ROOT到当前节点 是否构成了一个完整的单词。
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
    let curNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let idx = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (curNode.children[idx] === null) {
        curNode.children[idx] = new TrieNode();
      }
      curNode = curNode.children[idx]; //将当前节点更新为当前字符所对应的子节点
    }
    curNode.isWord = true; // 在单词的最后一个字符处标记为一个完整单词
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let curNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let idx = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (curNode.children[idx] === null) return false;
      curNode = curNode.children[idx];
    }
    return curNode.isWord; // 检查最后一个字符节点是否标记为一个完整单词
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let curNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let idx = prefix.charCodeAt(i) - 'a'.charCodeAt(0);
      if (curNode.children[idx] === null) return false;
      curNode = curNode.children[idx];
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
