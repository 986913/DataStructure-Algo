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
    let curNode = this.root;

    for (let index = 0; index < word.length; index++) {
      let idx = word.charCodeAt(index) - 'a'.charCodeAt(0);
      if (curNode.children[idx] === null) {
        curNode.children[idx] = new TrieNode();
      }
      curNode = curNode.children[idx];
    }
    curNode.isWord = true;
  };

  /**
   * @param {string} word
   * @return {boolean}
   */
  search = function (word) {
    const dfs = (curNode, index) => {
      if (index === word.length) return curNode.isWord;

      /* 如果当前字符是通配符 '.'， 那么遍历所有子节点, 对每个字节点调用dfs得知某个子节点能不能匹配完整单词
            若某个子节点匹配到了完整单词，  则递归返回true
            若某个子节点不能匹配到完整单词，那就回溯并尝试其他子节点
      */
      if (word[index] === '.') {
        for (let child of curNode.children) {
          // 如果子节点存在且递归调用dfs返回true
          if (child && dfs(child, index + 1)) return true;
        }
        // 回溯在这里(当一个方向失败时，退回上层，并尝试其他方向-下一个child): 没有子节点匹配 给上层返回false
        return false;
      } else {
        let idx = word.charCodeAt(index) - 'a'.charCodeAt(0);
        if (curNode.children[idx] === null) return false;
        // 递归调用 dfs 检查下一个字符
        return dfs(curNode.children[idx], index + 1);
      }
    };

    return dfs(this.root, 0);
  };
}
