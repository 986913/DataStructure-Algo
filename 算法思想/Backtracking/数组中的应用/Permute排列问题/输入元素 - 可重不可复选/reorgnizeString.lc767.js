/**
 * @param {string} s
 * @return {string}
 */

/******************************** Solution 1:  Backtracking (ie:多叉树遍历框架) LC47变形题 ******************************/
var reorganizeString = function (s) {
  let arr = s.split('').sort();

  let result = [];
  let used = [];
  const traversal = (arr, curPath, used) => {
    if (curPath.length === arr.length) {
      result.push([...curPath]);
      return;
    }

    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (used[i] === true) continue;
      if (set.has(arr[i])) continue;
      if (curPath.length && arr[i] === curPath[curPath.length - 1]) continue; // 检查当前字符是否与上一个字符相同

      curPath.push(arr[i]);
      used[i] = true;
      set.add(arr[i]);
      traversal(arr, curPath, used);
      curPath.pop();
      used[i] = false;
    }
  };

  traversal(arr, [], used);
  return result.length ? result[0].join('') : '';
};

/******************************** Solution 2: Map + Priotrity Queue ******************************/
var reorganizeString = function (s) {
  // 1. Create a map to store the frequency of each character.
  let map = new Map();
  for (const char of s) {
    map.set(char, map.get(char) + 1 || 1);
  }

  // 2. Create a PQ by sorting the keys of the map based on their frequencies （按照频率从大到小）
  const pq = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  // console.log(pq);

  let res = '';

  // 3. Reorganize the string by alternately appending characters from the pq.
  while (pq.length >= 2) {
    const char1 = pq.shift();
    const char2 = pq.shift();

    res += char1;
    res += char2;

    map.set(char1, map.get(char1) - 1);
    map.set(char2, map.get(char2) - 1);

    // add the characters back to the pq if their count is still greater than 0.
    if (map.get(char1) > 0) pq.push(char1);
    if (map.get(char2) > 0) pq.push(char2);

    // Resort the pq based on the updated frequencies.
    pq.sort((a, b) => map.get(b) - map.get(a));
  }

  // If there's any remaining character in the pq, append it to the result string.
  if (pq.length) {
    const char = pq[0];
    /* If the remaining character has a count greater than 1, 
      reorganization is not possible, return an empty string. */
    if (map.get(char) > 1) return '';
    res += char;
  }

  return res;
};
