/*
write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values of in the array where the average of the pair equal the target value,
there may be more than one pair that matches the average target


eg: 
  averagePair([1,2,3],  2.5)                  true
  averagePair([1,3,3,5,6,7,10,12,19],  8)     true
  averagePair([-1,0,3,4,5,6],  4.1)           false  
  averagePair([],  4)                         false
*/

const averagePair = (arr, averageTarget) => {
  if (arr.length <= 1) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 > averageTarget) right--;
    else if ((arr[left] + arr[right]) / 2 < averageTarget) left++;
    else return true;
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
