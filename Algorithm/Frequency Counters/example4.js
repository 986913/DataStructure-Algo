/*
  implement a function called hasDuplocated which accepts a varible number of integer arguments and returns 
  true if there are duplocates in the arguments.

  should be solved in O(n) or better

  eg:
  hasDuplicates(1,2,3,4,5,6)    false
  hasDuplicates(1,2,3,3,4,5)    true
*/

const hasDuplicates = (...args) => {
  let lookUp = {};

  const inputs = Array.from(args);
  for(let val of inputs){
    if(lookUp[val] >=1) return true
    else lookUp[val] = (lookUp[val]||0) + 1
  }
  return false
}


const hasDuplicatesV2 = (...args) => {
  const lookUp = new Map();
  for(let val of args){
    if(lookUp.has(val)) return true
    else lookUp.set(val, true)
  }
  return false;
}