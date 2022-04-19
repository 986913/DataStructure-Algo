/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */



 const swap = (str, a, b) => {
  let tmp = str[a];
  str[a] = str[b];
  str[b] = tmp;
}

/*2 pointers */
var reverseString = function(s) {
  let startIdx = 0; let endIdx = s.length-1;
  
  while(startIdx<endIdx){
      swap(s,startIdx,endIdx);
      startIdx++;
      endIdx--;
  }
  
  return s
};

