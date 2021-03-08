/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

// solution 1:  O(n^2)
var isPrefixOfWord = function (sentence, searchWord) {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(searchWord))
      return i + 1;
  }
  return -1;
};


// solution 2:  这个更好 O(N)

var isPrefixOfWord = function(sentence, searchWord) {
  const length = searchWord.length
  const arr = sentence.split(' ');
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i].slice(0, length) === searchWord) 
      return i + 1    
  }
  return -1
}