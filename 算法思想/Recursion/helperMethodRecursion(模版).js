/*
  Helper method recursion is a design pattern of recursion:

  模板:
  function outer(input){
    var outerScopedVariable = [];
    function helper(helperInput){
      // modify the outerScopedVariable;
      helper(helperInput--)
    }
    helper(input);
    return outerScopedVariable
  }

*/



/* for example:

  try to collect all of odd values in an array
 */

const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if(helperInput.length === 0) return;
    //modify the result;
    if(helperInput[0]%2 !== 0){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))

  }

  helper(arr);
  return result;

}

console.log(collectOddValues([1,2,3,4,5]))  // [1,3,5]