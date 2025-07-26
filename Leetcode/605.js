/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

/*
总结：
  贪心遍历花坛，遇到左右邻居都空且当前格空时种花，种花后跳过下一个位置，直到种够 n 朵或遍历结束。
  边界位置以不存在的格子视为空地处理，避免越界判断复杂。
*/

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    // 左侧不存在或为空
    let prev = i === 0 ? 0 : flowerbed[i - 1];
    // 当前格子状态
    let curr = flowerbed[i];
    // 右侧不存在或为空
    let next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

    // 左中右三格都为空，才能种花
    if (prev === 0 && curr === 0 && next === 0) {
      flowerbed[i] = 1; // 种花
      i++; // 跳过下一个，防止相邻种花
      n--; // 种花数量减1
    }
  }

  return n <= 0; // 能种够 n 朵则返回 true
};
