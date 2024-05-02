/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/******************************Solution: Hash table ******************************************/
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (let char of magazine) {
    map.set(char, map.get(char) + 1 || 1);
  }

  for (let char of ransomNote) {
    if (!map.has(char)) return false;

    map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) map.delete(char);
  }

  return true;
};

/*
  var canConstruct = function (ransomNote, magazine) {
    let map = new Map();
    for (let char of ransomNote) {
      map.set(char, map.get(char) + 1 || 1);
    }

    for (let char of magazine) {
      if (map.has(char)) {
        map.set(char, map.get(char) - 1);
      }
      if (map.get(char) === 0) map.delete(char);
    }

    return map.size === 0;
  };
*/
