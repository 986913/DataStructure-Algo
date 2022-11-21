/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (let char of magazine) {
    map.set(char, map.get(char) + 1 || 1);
  }

  for (let char of ransomNote) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
    /* 或者使用map.has达到一样的效果， 但是要map.delete :
        if (!map.has(char)) return false;
        map.set(char, map.get(char) - 1);
        if(map.get(char)===0) map.delete(char)
     */
  }

  return true;
};
