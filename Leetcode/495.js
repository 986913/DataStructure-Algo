/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
/*
input: findPoisonedDuration([1,2,6], 8)
output: 13
*/
var findPoisonedDuration = function (timeSeries, duration) {
  let arr = [];
  let len = timeSeries.length;

  for (let i = 0; i < len; i++) {
    let diff;

    if (timeSeries[i + 1] === undefined) diff = duration;
    else diff = timeSeries[i + 1] - timeSeries[i];

    arr.push(Math.min(diff, duration));
  }

  return arr.reduce((acc, cur) => acc + cur);
};
