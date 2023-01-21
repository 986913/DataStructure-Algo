/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 *
 * 问题就转化为跳跃覆盖范围究竟可不可以覆盖到终点
 *
 * 贪心算法局部最优解：每次取最大跳跃步数（取最大覆盖范围），
 *        整体最优解：最后得到整体最大覆盖范围，看是否能到终点。
 */
var canJump = function (nums) {
  let cover = 0;
  if (nums.length === 1) return true;

  for (let i = 0; i <= cover; i++) {
    // 注意这里是小于等于cover
    const currSteps = nums[i];
    cover = Math.max(i + currSteps, cover);
    console.log(cover);
    if (cover >= nums.length - 1) return true; // 说明可以覆盖到终点了
  }

  return false; // 说明不能覆盖到终点了
};
