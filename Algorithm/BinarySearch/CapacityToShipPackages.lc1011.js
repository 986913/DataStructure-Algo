/* ------------------Solution: Binary search (LC875变形题) ------------------------------------------------------- */
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let minWeight = Math.max.apply(Math, weights);
  let maxWeight = weights.reduce((acc, cur) => acc + cur);

  let left = minWeight;
  let right = maxWeight;
  //2分扫描：
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canFinish(weights, mid, days)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

//helper function:  如果载重为cap,是否能在D天内运完货物?
const canFinish = (weights, cap, D) => {
  let i = 0;
  for (let day = 0; day < D; day++) {
    let maxCap = cap;
    while (maxCap - weights[i] >= 0) {
      maxCap -= weights[i];
      i++;
      if (i === weights.length) return true;
    }
  }
  return false;
};
