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