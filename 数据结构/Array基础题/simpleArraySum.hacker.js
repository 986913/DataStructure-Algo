/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

/*********************************** Solution 1 ***********************************/
function simpleArraySum(ar) {
  return ar.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

/*********************************** Solution 2 ***********************************/
function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
