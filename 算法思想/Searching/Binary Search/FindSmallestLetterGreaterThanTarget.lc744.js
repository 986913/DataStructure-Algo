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
      left = mid + 1; // difference is here
    }
  }

  if (left >= letters.length) {
    return letters[0];
  }

  return letters[left];
};
