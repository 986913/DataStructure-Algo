/********************************** Solution1: Brute Force ： O(n×k),其中𝑘是max(piles) **********************************
  to try every possible eating speed to find the smallest workable speed.
*/
var minEatingSpeed = function (piles, h) {
  let speed = 1;

  while (true) {
    let totalHr = 0; // reset totalHr;

    for (let i = 0; i < piles.length; i++) {
      totalHr += Math.ceil(piles[i] / speed); //以speed的速度吃piles[i]个香蕉，需要的时间：
    }

    if (totalHr === h) {
      return speed;
    }

    speed += 1; // update speed, until the totalHr is reach to the required hours(h)
  }
};

/********************************** Solution2: Binary Search-求left bound （LC1011变形题）***********************************/
var minEatingSpeed = function (piles, h) {
  //speed取值范围：为最慢到最快 --> [1， Max(piles)]
  let left = 1;
  let right = Math.max.apply(Math, piles);

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let totalHr = 0; // reset totalHr;
    for (let i = 0; i < piles.length; i++) {
      totalHr += Math.ceil(piles[i] / mid);
    }

    if (totalHr > h) {
      //在当前mid的速度下，要吃完所有香蕉耗时太久（多于h), 那就得提高速度
      left = mid + 1;
    } else if (totalHr < h) {
      //在当前mid的速度下，要吃完所有香蕉耗时快（小于h), 那就得降低速度
      right = mid - 1;
    } else {
      //在当前mid的速度下，要吃完所有香蕉耗时刚刚好是h
      //别返回。不断向左收缩,达到锁定左边界的目的
      right = mid - 1;
    }
  }

  return left; //吃完所有香蕉的最慢速度就是left
};
