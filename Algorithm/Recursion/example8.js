
/*
  write a function called reverse, which accepts a string, return the reverse of string

  eg: 
    reverse('awesome')        // 'emosewa'
    reverse('rithmschool')    // 'loohcsmhtir
 */


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