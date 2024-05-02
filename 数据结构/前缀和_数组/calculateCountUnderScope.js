/**
  前缀和在生活中运用也挺广泛的，比方说，你们班上有若干同学，每个同学有一个期末考试的成绩（满分 100 分），
  那么请你实现一个 API，输入任意一个分数段，返回有多少同学的成绩在这个分数段内。
  那么，你可以先通过计数排序的方式计算每个分数具体有多少个同学，然后利用前缀和技巧来实现分数段查询的API：
 */

const countUnderScoreScope = (low, high, scores) => {
  //记录每个分数有几个同学, 满分100
  let count = new Array(100 + 1);
  for (let score of scores) {
    count[score]++;
  }

  // 构造前缀和数组：
  for (let i = 0; i < count.length; i++) {
    count[i] = count[i] + count[i - 1];
  }

  // 利用 count 这个前缀和数组进行分数段查询
  return count[high - 1] - count[low];
};
