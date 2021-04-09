/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution1：  
var isAnagram = function(s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  return sortedS===sortedT
};


// Solution2: use map
var isAnagram = function(s, t) {
  const map = new Map();

  for(let i=0; i<t.length; i++){
    map.set(t[i], map.get(t[i])+1||1)
  }

  for(let i=0; i<s.length; i++){
    if(!map.has(s[i])) return false
    map.set(s[i], map.get(s[i])-1)
  }
  
  for(let [key, val] of map){
    if(val!==0) return false
  }

  return true;
};