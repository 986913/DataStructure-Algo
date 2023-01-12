/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/**
 * 那么局部最优：当前累加rest[j]的和curSum一旦小于0，起始位置至少要是j+1，因为从j开始一定不行。
 * 全局最优：找到可以跑一圈的起始位置。
 */

/**
  首先如果总油量减去总消耗大于等于零那么一定可以跑完一圈，说明各个站点的加油站剩油量rest[i]相加一定是大于等于0的。
  每个加油站的剩余量rest[i]为gas[i] - cost[i]。
  i从0开始累加rest[i]，和记为curSum，一旦curSum小于零，说明[0, i]区间都不能作为起始位置，起始位置从i+1算起，再从0计算curSum。 
 */
var canCompleteCircuit = function (gas, cost) {
  const gasLen = gas.length;
  let start = 0;
  let curSum = 0; // 累加rest[i] (累加各个站点的加油站剩油量)
  let totalSum = 0; // 各个站点的加油站剩油量rest[i]的相加

  for (let i = 0; i < gasLen; i++) {
    const rest = gas[i] - cost[i];
    curSum += rest;
    totalSum += rest;

    if (curSum < 0) {
      //一旦curSum小于零，说明[0, i]区间都不能作为起始位置，起始位置从i+1算起，再从0计算curSum。
      curSum = 0;
      start = i + 1;
    }
  }

  if (totalSum < 0) return -1; // 各个站点的加油站剩油量rest[i]的相加 < 0 说明不能跑完一圈

  return start;
};
