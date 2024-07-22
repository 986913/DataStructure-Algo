/************************************* LC208变形题 : prefix tree + DFS回溯 **************************************************/

class TrieNode {
  constructor() {
    this.children = Array.from({ length: 26 }).fill(null);
    this.isWord = false; // 它用来表示从根节点到当前节点是否构成了一个完整的单词。
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord = function (word) {
    let node = this.root;

    for (let index = 0; index < word.length; index++) {
      let idx = word.charCodeAt(index) - 'a'.charCodeAt(0);
      if (node.children[idx] === null) {
        node.children[idx] = new TrieNode();
      }
      node = node.children[idx];
    }
    node.isWord = true;
  };

  /**
   * @param {string} word
   * @return {boolean}
   */
  search = function (word) {
    const dfs = (node, index) => {
      if (index === word.length) return node.isWord;

      /* 如果当前字符是通配符 '.'， 那么遍历所有子节点, 对每个字节点调用dfs得知某个子节点能不能匹配完整单词
        若某个子节点匹配到了完整单词，  则递归返回true
        若某个子节点不能匹配到完整单词，那就回溯并尝试其他子节点
      */
      if (word[index] === '.') {
        for (let child of node.children) {
          // 回溯在这里： 如果子节点存在且递归调用dfs返回true, 否则回溯尝试其他子节点
          if (child && dfs(child, index + 1)) return true;
        }
        // 如果没有子节点匹配，返回 false
        return false;
      } else {
        let idx = word.charCodeAt(index) - 'a'.charCodeAt(0);
        if (node.children[idx] === null) return false;
        // 递归调用 dfs 检查下一个字符
        return dfs(node.children[idx], index + 1);
      }
    };

    return dfs(this.root, 0); // <--- diff is here
  };
}
