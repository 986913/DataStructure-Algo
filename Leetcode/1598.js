/**
 * @param {string[]} logs
 * @return {number}
 */

var minOperations = function(logs) {
  let stack = [];
  
  for(let i=0; i<logs.length; i++){
    const arr = logs[i].split('/');

    if(arr[0]==='.'){
      continue
    }else if(arr[0]==='..'){
      stack.pop()       
    } else {
      stack.push(arr[0])
    }
  }
  return stack.length
};