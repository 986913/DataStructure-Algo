var strStr = function(haystack, needle) {
  if(needle==='') return 0;
  if(haystack.length<needle.length) return -1;
  
  let windowStartIdx=0;
  let result = '';
  const windowSize = needle.length;
  
  for(let windowEndIdx = 0; windowEndIdx<haystack.length; windowEndIdx++){
     result+=haystack[windowEndIdx];
  
     if(result.length>=windowSize){
         if(result===needle) return  windowStartIdx;
         result = result.substring(1);
         windowStartIdx += 1;
     }
  }
  
  return -1;
};