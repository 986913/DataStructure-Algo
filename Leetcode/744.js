/***************************Binary search 求left bound的变种 ******************************************/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (target < letters[mid]) {
      right = mid - 1;
    } else if (target > letters[mid]) {
      left = mid + 1;
    } else {
      left = mid + 1; //<--- difference is here： 以确保找到的是第一个大于target的位置。
    }
  }

  // left向右走到头
  if (left >= letters.length) return letters[0]; // not find any greater than target, then按照题目要求return letters[0]

  return letters[left];
};
