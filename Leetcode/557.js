/**
 * @param {string} s
 * @return {string}
 */


 var reverseWords = function(s) {
  let arr = s.split(' ');
  let result = [];
  
  for(let i=0; i<arr.length; i++){
    const reversed = reveseString(arr[i]);
    result.push(reversed)
  }
  
  return result.join(' ');
};

//reverseString by using 2 pointer 
const reveseString = (str) => {
 let left = 0;
 let right = str.length-1; 

 let arr = str.split('');

 while(left<right){
     swap(arr, left, right);
     left++;
     right--
 }

 return arr.join('')
}


const swap = (arr, a, b) => {
  let tmp = arr[a];
  arr[a]=arr[b];
  arr[b]=tmp;
}
