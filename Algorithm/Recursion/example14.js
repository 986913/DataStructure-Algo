function capitalizeWords (arr) {
  let result =[];
  
  function helper(helperInput){
      if(helperInput.length === 0) return;
      result.push(helperInput[0].toUpperCase())
      helper(helperInput.slice(1))
  }
  helper(arr);
  
  return result;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']