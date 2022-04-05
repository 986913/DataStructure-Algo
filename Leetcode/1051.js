/**
 * @param {number[]} heights
 * @return {number}
 */

/* 1. force brute:  开了一个新数组 */
 var heightChecker = function(heights) {
  let actual = [...heights];
  let expected = heights.sort((a,b)=>a-b);
  let count =0;
  
  expected.forEach((item, index)=>{
      if(item!==actual[index]){
          count++
      }
  })

  return count
};

