/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* --------------------------- Solution1: --------------------------- */
var isAnagram = function (s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  return sortedS === sortedT;
};

/* --------------------------- 👍👍👍 Solution2: use map - hashtable ------------------ */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();
  for (let i of s) {
    map.set(i, map.get(i) + 1 || 1);
  }

  for (let i of t) {
    if (!map.get(i)) return false;
    map.set(i, map.get(i) - 1);
    /* 或者使用map.has达到一样的效果， 但是要map.delete :
        if (!map.has(i)) return false;
        map.set(i, map.get(i) - 1);
        if(map.get(i)===0) map.delete(i)
    */
  }

  return true;
};

/* --------------------------- 👍👍👍 Solution3: 👍👍👍 use array - hashtable ------------------ */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const arr = new Array(26).fill(0);
  const base = 'a'.charCodeAt(); //97, 可以直接在单个字符后面用charCodeAt()

  for (const i of s) {
    arr[i.charCodeAt() - base]++;
  }
  for (const i of t) {
    if (!arr[i.charCodeAt() - base]) return false; // 代表t中含有s没有的单词
    arr[i.charCodeAt() - base]--;
  }

  return true;
};
