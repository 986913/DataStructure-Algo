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

  while (point < arr.length) {
    if (target !== arr[point]) {
      missingNumbersArr.push(target);
      target++;
    } else {
      point++;
      target++;
    }
  }

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
