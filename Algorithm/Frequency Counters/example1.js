/* 
  write a function called same, which accepts 2 arrays.
  the function should return true if every value in the array has it's corresponding value squared in the second array.
  the frequency of values must be the same

  forExample:
  same([1,2,3], [4,1,9])   true
  same([1,2,3], [1,9])     false
  same([1,2,1], [4,4,1])   false (must be same frequency)
*/

// 粗暴 solution:  O(N^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
};

// after user frequecy counters pattern: 😄  O(N)
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frequecyCounter1 = {};
  let frequecyCounter2 = {};

  for (let val of arr1) {
    frequecyCounter1[val] = (frequecyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequecyCounter2[val] = (frequecyCounter2[val] || 0) + 1;
  }

  for (let key in frequecyCounter1) {
    if (!(key ** 2 in frequecyCounter2)) return false;
    if (frequecyCounter1[key] !== frequecyCounter2[key ** 2]) return false;
    return true;
  }
};