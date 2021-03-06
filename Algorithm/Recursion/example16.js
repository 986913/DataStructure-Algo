function collectStrings (obj) {
  let result =[];
  
  function helper(helperInput){
    
    for(let key in helperInput){
      if(typeof(helperInput[key])==='string'){
          result.push(helperInput[key])
      }else if (typeof(helperInput[key])==='object'){
          helper(helperInput[key])
      }
    }
  
  }
  
  helper(obj);
  return result;
}


const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])