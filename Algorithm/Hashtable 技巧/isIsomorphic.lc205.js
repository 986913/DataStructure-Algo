/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/************************************  hashtable : LC 290 变形题  ************************************************/
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (!sMap.has(sChar)) {
      sMap.set(sChar, tChar);
    } else {
      if (sMap.get(sChar) !== tChar) return false;
    }

    if (!tMap.has(tChar)) {
      tMap.set(tChar, sChar);
    } else {
      if (tMap.get(tChar) !== sChar) return false;
    }
  }

  return true;
};
/* 
return false case:
            已 s = foo, t = bar为例
              map:  { f:'b', o:"a" } 
              tracker { b:'f', a:"o" }
            此时 i=2, charS是o, charT是r, map[charS]是a，  map[charS] !== charT
*/
