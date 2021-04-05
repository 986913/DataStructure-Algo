/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */

var allCellsDistOrder = function(R,C,r0,c0){
  var result = [];
  for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
      result.push([i,j])
    }
  }
  
  const sortedResult=result.sort((a,b)=>{
    return (Math.abs(a[0]-r0)+ Math.abs(a[1]-c0)) -  (Math.abs(b[0]-r0)+ Math.abs(b[1]-c0))
  })

  return sortedResult;
}

console.log(allCellsDistOrder(1,2,0,0)) // [[0,0],[0,1]]