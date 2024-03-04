/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/************************************  hashtable : LC 290 变形题  ************************************************/
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();
  let tracker = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (!map.has(charS)) {
      map.set(charS, charT);
    } else {
      if (map.get(charS) !== charT) return false;
    }

    if (!tracker.has(charT)) {
      tracker.set(charT, charS);
    } else {
      if (tracker.get(charT) !== charS) return false;
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
