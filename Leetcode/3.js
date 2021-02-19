/**
 * @param {string} s
 * @return {number}
 */

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