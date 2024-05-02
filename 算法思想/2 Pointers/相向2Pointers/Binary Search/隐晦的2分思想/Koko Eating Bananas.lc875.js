/* ------------------Solution1: 线性扫描 ------------------------------------------------------- */
const canFinish = (piles, speed, h) => {
  let time = 0;
  piles.forEach((n) => {
    //Math.ceil(n / speed) ----> 以speed的速度吃n个香蕉，需要的时间：
    time += Math.ceil(n / speed);
  });
  return time <= h;
};

var minEatingSpeed = function (piles, h) {
  const max = Math.max(...piles);
  //线性扫描：
  for (let speed = 0; speed < max; speed++) {
    if (canFinish(piles, speed, h)) return speed;
  }
  return max;
};

/* ------------------Solution2(Sol1的优化版)：2分扫描 （LC1011变形题） ------------------------------------------------------- */
const canFinish = (piles, speed, h) => {
  let time = 0;
  piles.forEach((n) => {
    //Math.ceil(n / speed) ----> 以speed的速度吃n个香蕉，需要的时间：
    time += Math.ceil(n / speed);
  });
  return time <= h;
};

var minEatingSpeed = function (piles, h) {
  const max = Math.max.apply(Math, piles);
  let left = 1;
  let right = max;
  //2分扫描：
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canFinish(piles, mid, h)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
