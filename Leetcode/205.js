/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const table = {};
  const tracker = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in table) && !(t[i] in tracker)) {
      table[s[i]] = t[i];
      tracker[t[i]] = s[i];
    } else {
      /* 
            已 s = foo, t = bar为例
            table:  { f:'b', o:"a" } 
            tracker { b:'f', a:"o" }

            此时 i=2, s[i]是o, t[i]是r, table[s[i]]是a，  table[s[i]] !== t[i]
          */
      if (table[s[i]] !== t[i]) return false;
    }
  }

  return true;
};
