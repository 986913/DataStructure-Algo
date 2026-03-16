/*****************************  Solution: Run Length Eeconding + Recursion  ******************************/
/**
 * @param {number} n
 * @return {string}
 * 时间, 空间都是 O(2^n)
 */
var countAndSay = function (n) {
  // base condition
  if (n === 1) return '1';

  // pre-order
  // 递归：获取上一行的结果
  const prevSeq = countAndSay(n - 1);
  // post-order
  let curSeq = []; // 就是模版的“chunks”. 这里存的是`counts和char`
  let count = 1;
  for (let i = 1; i <= prevSeq.length; i++) {
    // 利用模板：利用索引 i 与 i-1 比较，判断是否属于同一个“块”
    if (prevSeq[i] === prevSeq[i - 1]) {
      count++;
    } else {
      // 结算当前“分块”：当字符变化时，将“出现次数”+“字符本身”拼接到结果中
      curSeq.push(count, prevSeq[i - 1]);
      count = 1; // 重置计数器，开始新的一块
    }
  }

  return curSeq.join(''); // 最后统一转回字符串
};

/*****************************  Solution: Run Length Eeconding + Iteratively  ******************************/
/**
 * @param {number} n
 * @return {string}
 * 时间, 空间都是 O(2^n)
 */
var countAndSay = function (n) {
  let currentResult = '1';

  // 从 2 迭代到 n，不断“滚动”更新结果
  for (let round = 2; round <= n; round++) {
    let curRoundChunks = [];
    let count = 1;

    // 对当前的字符串进行 RLE 编码扫描
    for (let i = 1; i <= currentResult.length; i++) {
      if (currentResult[i] === currentResult[i - 1]) {
        count++;
      } else {
        // 将 [数量, 字符] 压入数组
        curRoundChunks.push(count, currentResult[i - 1]);
        count = 1;
      }
    }

    // 这一轮“说”完了，更新结果供下一轮参考
    currentResult = curRoundChunks.join('');
  }
  return currentResult;
};
