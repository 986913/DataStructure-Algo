/**
 * @param {string} s
 * @return {number}
 */

// 暴力法：
var lengthOfLongestSubstring = function(s) {
  let maxSize = 0;
  
  for(let i=0 ; i<s.length; i++){
    let set = new Set();
    for(let j=i; j<s.length; j++){
      if(set.has(s[j])) break;
      set.add(s[j])
    } 
    maxSize = Math.max(maxSize, set.size)
  }
  
  return maxSize
};


// Slding window
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;
  let arrWindow = [];

  for(let i =0; i<s.length; i++){
    const index = arrWindow.indexOf(s[i]);
    if(index !== -1){
      // shrink window
      arrWindow.splice(0, index+1)
    }
    // expand window
    arrWindow.push(s[i]);
    maxLen = Math.max(maxLen, arrWindow.length)
  }
return maxLen;
};