/*
eg: sumRange(4)  // 10  解释：4+3+2+1=10
*/

//迭代：
const sumRange = n => {
  let sum =0;
  for(let i=1; i<=n; i++){
    sum+=i;
  }
  return sum;
}

// Recurrion:  递归
const sumRange = n => {
  if(n===1) return 1;
  return n+sumRange(n-1);
}

sumRange(3);   // 6
sumRange(4);   // 10