/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

//暴力法：
var findKthPositive = function (arr, k) {
  let target = 1;
  let point = 0;
  let missingNumbersArr = [];

  //scan over input arr, then updating missingNumbersArr
  while (point < arr.length) {
    if (target !== arr[point]) {
      missingNumbersArr.push(target);
      target++;
    } else {
      point++;
      target++;
    }
  }

  //如果K超出了missingNumbersArr长度， 那么把缺失的整数用一个while循环模拟完
  if (k > missingNumbersArr.length) {
    let lastNo = Math.max(
      arr[arr.length - 1],
      missingNumbersArr[missingNumbersArr.length - 1] || 0
    );
    let extendTimes = k - missingNumbersArr.length;

    while (extendTimes > 0) {
      lastNo++;
      extendTimes--;
    }
    return lastNo;
  } else {
    return missingNumbersArr[k - 1];
  }
};

//迭代
var findKthPositive = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - i - 1 >= k) {
      return k + i;
    }
  }

  return k + arr.length;
};

//二分法
var findKthPositive = function (arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    if (arr[mid] - mid - 1 >= k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return k + start;
};
