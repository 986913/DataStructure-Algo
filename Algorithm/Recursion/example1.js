/*
  Recursion's 2 most important parts:
    1. Base case  （conditon when to stop）
    2. Different input
*/

/*

wirte a fuction called countDown, input is a number;
output is print all number, the last one is "all done" 

eg: countDown(4)  4 3 2 1 'all done'
 */

//迭代
const countDown = n => {
  for(let i=n; i>0; i--){
    console.log(i)
  }
  console.log('all done')
}

// recursion:
