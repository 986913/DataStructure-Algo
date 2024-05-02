/**
 * @param {number[][]} image
 * @return {number[][]}
 */
/************************** Two pointer ******************************/
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let row = image[i];
    let left = 0;
    let right = row.length - 1;
    while (left < right) {
      [row[left], row[right]] = [row[right], row[left]];
      left++;
      right--;
    }

    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0) row[j] = 1;
      else row[j] = 0;
    }
  }

  return image;
};
