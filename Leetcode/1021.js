/**
 * @param {string} S
 * @return {string}
 */

// brute force:
var removeOuterParentheses = function (S) {
  let decomposition = []; // use to save decomposition
  let chars = ""; // each item of decomposition
  let leftAmount = 0;
  let rightAmount = 0;
  let result = "";

  for (let i = 0; i < S.length; i++) {
    if (!chars || leftAmount !== rightAmount) {
      if (S[i] === "(") leftAmount += 1;
      else rightAmount += 1;

      chars += S[i];
    }
    if (leftAmount === rightAmount) {
      decomposition.push(chars);
      chars = "";
    }
  }

  decomposition.forEach((char) => {
    const newchar = char.substring(1, char.length - 1);
    result += newchar;
  });

  return result;
};
console.log(removeOuterParentheses("(()())(())")); // "()()()"


// use Stack:
var removeOuterParentheses = function (S) {
  let stack = [];    //stack only save "("
  let result = "";
  let index = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") stack.push(S[i]);
    else stack.pop();
    
    if (stack.length === 0) {
      // when stack is empty. update result and index
      result += S.substring(index + 1, i);
      index = i + 1;
    }
  }
  
  return result;
};
console.log(removeOuterParentheses("(()())(())")); // "()()()"
