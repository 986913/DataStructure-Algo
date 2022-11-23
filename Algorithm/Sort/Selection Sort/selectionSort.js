/* 
  Selection Sort: 没有bubble sort和insertion sort好使

  sort([8, 1, 2, 3, 4, 5, 6, 7]); // [1,2,3,4,5,6,7,8]

  Big O:
    best time complexity     O(n)
    average time complexity  O(n2)
    worst time complexity    O(n2)

    space complexity         O(1)
*/

// https://www.youtube.com/watch?v=xWBP4lzkoyM&ab_channel=GeeksforGeeks

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (i !== minIndex) {
      let tmp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = tmp;
    }
  }

  return arr;
}

selectionSort([19, 5, 25, 3, 10]);
