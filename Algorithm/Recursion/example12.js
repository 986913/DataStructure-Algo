function capitalizeFirst (arr) {
  let result = [];
  
  function helper(helperInput){
      if(helperInput.length===0) return;
      
      const capital = helperInput[0][0].toUpperCase()+helperInput[0].slice(1)
      result.push(capital)
      
      helper(helperInput.slice(1))
  }
  helper(arr)
  
  return result;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
