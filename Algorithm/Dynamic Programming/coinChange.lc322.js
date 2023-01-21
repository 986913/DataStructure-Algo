/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//  https://www.bilibili.com/video/BV1xb411e7ww?from=search&seid=16885839030632252657

var coinChange = function (coins, amount) {
  let F = new Array(amount + 1); //1. 开数组
  F[0] = 0; //2.初始化 initialization

  //3. F[1],F[2],F[3]....F[27]
  for (let i = 1; i <= amount; i++) {
    F[i] = Infinity;

    for (let j = 0; j < coins.length; j++) {
      //边界条件：
      if (i >= coins[j] && F[i - coins[j]] != Infinity) {
        F[i] = Math.min(F[i - coins[j]] + 1, F[i]); //F[i] = Math.min{ F[i-coins[0]]+1, ...., F[i-coins[coins.length-1]]+1 }
      }
    }
  }

  if (F[amount] == Infinity) F[amount] = -1;

  return F[amount];
};
