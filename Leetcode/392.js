/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 2pointers

var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let sPointerIdx = 0;
  for (let i = 0; i < t.length; i++) {
    // if it is matching, increment sPointerIdx
    if (t[i] === s[sPointerIdx]) {
      sPointerIdx++;
    }
  }

  return sPointerIdx === s.length;
};
// isSubsequence(abc, ahbgdc) --> true;    isSubsequence(axc, ahbgdc) --> false
