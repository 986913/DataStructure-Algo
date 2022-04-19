/**
 * @param {string} s
 * @return {number}
 */

// sliding window

 var lengthOfLongestSubstringTwoDistinct = function(s) {
  let maxLen=0;
  let windowStartIdx = 0;
  let map = new Map();
  
  for(let windowEndIdx = 0; windowEndIdx < s.length;windowEndIdx++ ){
      map.set(s[windowEndIdx], map.get(s[windowEndIdx])+1||1);  //1. 进
      while(map.size > 2){   //出， 当window is invalid
          map.set(s[windowStartIdx], map.get(s[windowStartIdx])-1);
          if(map.get(s[windowStartIdx])===0) map.delete(s[windowStartIdx]);
          windowStartIdx++
      }
      
      maxLen = Math.max(maxLen,windowEndIdx-windowStartIdx+1 )
  }   
  return maxLen;
};