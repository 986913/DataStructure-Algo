/* 
  Given an array A of integers and integer K,
  return the maximun s such that there exists i<j with A[i]+A[j]=s, and s<k,
  if no i,j exist satisfying the equation, return -1;

  eg:
    twoSumLessThanK([34,23,1,24,75,33,54,8], 60)  // 58  解释: we can use 34 and 24 to sum 58 which is less than 60
    twoSumLessThanK([10,20,30], 15)               // -1  解释: it's not possible to get a pair sum less than 15
 */

  const twoSumLessThanK = (ARR, K) => {
    let max = -Infinity;
    let sorted = ARR.sort((a,b)=>a-b);
    let left =0; let right =ARR.length-1;

    while(left<right){
      if(sorted[left]+sorted[right]>K){
        right--;
      }else{
        left++;
        max = Math.max(max, sorted[left]+sorted[right])
      }
    }

    return max;
  }

  console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60))  //58
  console.log(twoSumLessThanK([10,20,30], 15))    //-1