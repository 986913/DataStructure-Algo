/*

wirte a fuction called factorial, input is a number;
output is the Factorial of input

eg: factorial(4) // 24   解释：4x3x2x1=24
    factorial(5) // 120  解释：5x4x3x2x1=120
*/


// 迭代法：
// const factorial = n => {
//   let result = 1;
//   for(i=n; i>0; i--){
//     result = result * i
//   }
//   return result;
// }

// recurrsion:
const factorial = n => {
  if(n===1) return 1
  return n*factorial(n-1);
}

factorial(5) // 120