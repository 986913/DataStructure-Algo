/**
  Given capacity of knapsack W = 40, 
  items list values = [10, 20, 30, 40], weights = [30, 10, 40, 20]

  Input: W = 40, values = [10,20,30,40], weights = [30,10,40,20]
  Output: 60  

  输出60是因为values[1]和values[3]被放到背包里了，创造了最大的value:60
 */

/************************************** Solution 1: DFS + backtracking - O(2^n) ************************************/
const weightBagProblem = (W, values, weights, n) => {
  // Check capacity and items on zero
  if (W === 0 || n === 0) return 0;

  // if weights of current element is less than or equal to capacity we can either include or exclude the item
  if (weights[n] <= W) {
    return Math.max(
      values[n] + weightBagProblem(W - weights[n], values, weights, n - 1),
      weightBagProblem(W, values, weights, n - 1)
    );
  }
  // if weights of current element is greater than the capacity we will not include it thus returning just the ignoring part.
  return weightBagProblem(W, values, weights, n - 1);
};

/*
  const values = [10, 20, 30, 40];
  const weights = [30, 10, 40, 20];
  const capacity = 40;
  console.log(weightBagProblem(capacity, values, weights, values.length - 1));
*/

/************************************** Solution 2: DP  ************************************/
function weightBagProblem(W, values, weights) {
  const len = weights.length;
  // 定义 dp 数组
  const dp = Array(len)
    .fill()
    .map(() => Array(W + 1).fill(0));

  // 初始化
  for (let j = weights[0]; j <= W; j++) {
    dp[0][j] = values[0];
  }

  // 遍历物品:  weights数组的长度len (就是物品个数)
  for (let i = 1; i < len; i++) {
    // 遍历背包容量:
    for (let j = 0; j <= W; j++) {
      if (j < weights[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - weights[i]] + values[i]
        );
      }
    }
  }

  return dp[len - 1][W];
}

/**
  const values = [10, 20, 30, 40];
  const weights = [30, 10, 40, 20];
  const capacity = 40;
  console.log(weightBagProblem(capacity, values, weights))
 */
