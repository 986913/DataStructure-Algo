/**
 * @param {string[]} words
 * @return {string[]}
 */

/*********************** Solution: HashTable ***********************************/
var commonChars = function (words) {
  // 根据数组第一个创建map
  let map = new Map();
  for (let word of words[0]) {
    map.set(word, map.get(word) + 1 || 1);
  }

  // 接着循环数组
  for (let i = 1; i < words.length; i++) {
    // 对每一项创建tmp map
    let tmp = new Map();
    for (let j = 0; j < words[i].length; j++) {
      let char = words[i][j];
      tmp.set(char, tmp.get(char) + 1 || 1);
    }

    /* 把map和tmp进行比对，维持map: 
      出现tmp中没有的key,说明不是common 直接删除。 
      出现tmp中有的key,说明是common 值取小的那个
    */
    for (let [key, val] of map) {
      if (!tmp.has(key)) map.delete(key);
      else map.set(key, Math.min(val, tmp.get(key)));
    }
  }

  //根据维持好的map, 输出result
  let result = [];
  map.forEach((val, key) => {
    let count = val;
    while (count) {
      result.push(key);
      count--;
    }
  });
  return result;
};
