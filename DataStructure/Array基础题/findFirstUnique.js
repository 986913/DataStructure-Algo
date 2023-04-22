/**
Problem Statement 
Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.

Note: The function should return null if no unique number is found.

Input : An array of integers
Output : The first unique element in the array

findFirstUnique([4,5,1,2,0,4]) ---> 5
findFirstUnique([9,2,3,2,6,6]) ---> 9

 */

function findFirstUnique(arr) {
  let j;

  for (let i = 0; i < arr.length; i++) {
    j = 0;

    while (j < arr.length) {
      if (i != j && arr[i] == arr[j]) break;
      j += 1;
    }
    if (j == arr.length) return arr[i];
  }

  return null;
}

/**
 * We start from the first element and traverse through the whole array comparing it with all the other elements to see if any element is equal to it.
 * If so, we skip to the next element and repeat the same steps.
 * If not, then this is the first unique element in the array, like 0 is in the given example.
 */
