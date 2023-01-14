/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 2pointers

var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  const t_len = t.length;
  let j = 0;

  for (let i = 0; i < t_len; i++) {
    if (s[j] === t[i]) j++; // if it is matching, increment j
  }

  return j === s.length;
};

// isSubsequence(abc, ahbgdc) --> true;    isSubsequence(axc, ahbgdc) --> false
