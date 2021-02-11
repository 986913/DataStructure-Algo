/* 
  counter the each char's frequecy of a string:=

  eg: 
    frequencyCount('mingyue')      // {m:1, i:1, n:1, g:1, y:1, u:1, e:1}
    frequencyCount('mingming')     // {m:2, i:2, n:2, g:2}
*/

const frequencyCount = (str) => {
  let lookUp = {};
  for(let char of str){
    lookUp[char] =  (lookUp[char]|| 0) + 1;
  }
  return lookUp;
}

console.log(frequencyCount('mingming'))