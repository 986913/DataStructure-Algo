/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const getFrequency = (str) => {
  let lookUp = {}
  for(let char of str){
      lookUp[char] = (lookUp[char]||0)+1
  } 
  return lookUp;
}

const isEqual = (obj1, obj2) => {
  let obj1Len = Object.keys(obj1).length;
  let obj2Len = Object.keys(obj2).length;
  
  if(obj1Len === obj2Len){
    return Object.keys(obj1).every(key=>{
      return obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    })
  }
  return false
}

var checkInclusion = function(s1, s2) {
  // create hash for s1, to track the frequency of each char
  const hash = getFrequency(s1);
  
  let i = 0;
  let j = s1.length;  // j-i 是窗口大小
  
  for(i; i<=s2.length-s1.length; i++){
    const obj = getFrequency(s2.substring(i, i+j));
    if(isEqual(obj, hash)) return true
  }
  return false;
};