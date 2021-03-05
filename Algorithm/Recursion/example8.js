
/*
  write a function called reverse, which accepts a string, return the reverse of string

  eg: 
    reverse('awesome')        // 'emosewa'
    reverse('rithmschool')    // 'loohcsmhtir
 */

// solution 1:  use helper method pattern
function reverse(str){
  let result='';
  function helper(helperInput){
      const inputLen = helperInput.length;
      if(inputLen === 0) return;
      
      result+=helperInput[inputLen-1];
      
    helper(helperInput.slice(0, inputLen-1))
  }
  helper(str);
  return result;
}


// solution 2
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

