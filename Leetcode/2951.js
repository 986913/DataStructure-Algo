/**
 * @param {number[]} mountain
 * @return {number[]}
 */

/************************ Solution 1: Linear search ****************************/
var findPeaks = function (mountain) {
  let allPeaksIdx = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
      allPeaksIdx.push(i);
  }

  return allPeaksIdx;
};
