// Rearrange a given list such that it consists of alternating maximum minimum elements - GeeksforGeeks
const arr = [1, 0, 12, 9, 7, 23, 99];

const meanderingArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let results = [];
  const sorted = arr.sort((a, b) => a - b);

  while (left <= right) {
    if (left === right) results.push(sorted[right]);
    else {
      results.push(sorted[right]);
      results.push(sorted[left]);
    }
    right--;
    left++;
  }
};

console.log(meanderingArray(arr)); //[99, 0, 23, 1, 12, 7, 9]
