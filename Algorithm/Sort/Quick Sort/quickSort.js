/*
  Quick sort:

    原理:
    Quick sort is an efficient, in-place, recursive sorting algorithm that selects a "pivot" element and partitions all other elements into 2 subarrays:
      Elements that are smaller than the pivot are added in 1 subarray that is placed before the pivot.
      Elements that are larger than the pivot are added in 1 subarray that is placed after the pivot.
    The quick sort is then recursively applied to each subarray. and once the subarrays are sorted they are then merged back with the pivot element between them as per above.

    Big O：
      best time complexity     O(n log n)
      average time complexity  O(n log n)
      worst time complexity    O(n²)
      space complexity         O(log n)
 */

/* ---------------------------------------- Implemention ------------------------------------------------------ */

/* Main function  */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // left==right is base case to stop recursion, so here condition is left<right
    let privotIndex = partition(arr, left, right);
    quickSort(arr, left, privotIndex - 1);
    quickSort(arr, privotIndex, right); // 注意：是privotIndex而不是privotIndex+1
  }
  return arr;
}

/* helper function :
    1. partition helper function responsible arranging elments in an arr on either side of a privot
    2. given an array, this helper function should designate an element as the privot
    3. it should then rearrange elements in the array so that all values less than the privot are moved to the left of the pivot,
        and all values greater than the pivot are moved to the right of the pivot
    4. the order of elements on either side of the pivot dosen't matter
    5. the helper should do this in place, it should not create a new array
    6. when complete, the helper should return the index of the pivot

      eg:   partition([5,2,1,8,4,7,6,3])    // 4
      解释:  把[5,2,1,8,4,7,6,3]第一个元素5当做privot, 下面这些组合都是可以的，共同点就是reArrange后的数组中，5都在index=4的位置上
            比如： [2，1，4，3，5，8，7，6]
                  [1，4，3，2，5，7，6，8]
                  [3，2，1，4，5，7，6，8]
                  [4，1，3，2，5，6，8，7]
                  等等...
*/

function partition(arr, left, right) {
  let pivot = arr[left]; //将第一个元素作为privot
  let i = left; //left pointer
  let j = right; //right pointer

  while (i <= j) {
    //注意： 是while而不是if
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    //注意：condition条件
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; //sawpping two elements: arr[i] and arr[j]
      i++;
      j--;
    }
  }

  return i; // 注意： return i 不是j
}

// var sortedArray = quickSort([100, -3, 2, 300, 4, 6, 9, 1, 2, 5, 3, 23, 200]);
// console.log(sortedArray);

/* 
  这个印度叔讲的好 https://www.youtube.com/watch?v=7h1s2SojIRw&ab_channel=AbdulBari
  quick sort思路: https://www.youtube.com/watch?v=5nXrEBhBFpU&ab_channel=%E6%84%9B%E8%93%81AiZhen
*/
