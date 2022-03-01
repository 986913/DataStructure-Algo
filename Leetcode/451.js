/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // hash map {c=> 3, a => 3}
  let map = new Map();
  s.split('').forEach((char) => {
    map.set(char, map.get(char) + 1 || 1);
  });

  //sort map based on frequency:
  const sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));

  //log out result
  let result = [];
  sortedMap.forEach((value, key) => {
    while (value > 0) {
      result.push(key);
      value--;
    }
  });
  return result.join('');
};
