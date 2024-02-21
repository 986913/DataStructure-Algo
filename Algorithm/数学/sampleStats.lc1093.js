/**
 * @param {number[]} count
 * @return {number[]}
  这个题目只有中位数比较麻烦，其他的一次遍历即可搞定。
  我们第一次遍历的时候记录数字总数total

  如果total是偶数，那么取中间的两位数的平均值作为中位数
  如果total是奇数，那么取中间一个数作为中位数
  我们使用nums=total/2作为起始值，逐步减去count[i]的值，当nums<=0的时候即是过了中位数或者已经是中位数了。这里需要分奇偶数讨论。
 */

var sampleStats = function (count) {
  let maximum = null;
  let minimum = null;
  let mean = 0;
  let median = 0;
  let mode = 0;

  let common = 0;
  let totalCounts = 0;
  let sum = count.reduce((acc, cur, index) => {
    if (common < cur) {
      common = cur;
      mode = index;
    }
    if (cur != 0 && minimum == null) {
      minimum = index;
    }
    if (cur != 0) {
      totalCounts += cur;
      maximum = index;
    }

    return acc + cur * index;
  }, 0);

  //平均数等于和/总数
  mean = sum / totalCounts;

  //当totalCounts是偶数时
  if (totalCounts % 2 === 0) {
    let nums = totalCounts / 2; // nums初始化为数字总数的一半
    let firstIndex = null;

    for (let i = 0; i < count.length; i++) {
      nums -= count[i]; // 不断地减去每个数字的个数

      if (nums < 0) {
        if (firstIndex !== null) {
          median = (firstIndex + i) / 2; //如果有这个值 说明中位数的中间两位不是同一个数，需要取平均
        } else {
          median = i; //中位数的两位都是同一位，(i+i)/2=i
        }
        break;
      } else if (nums === 0 && firstIndex === null) {
        firstIndex = i; //当nums为0的时候，因为要取两个数的平均值，先保存一个数
      }
    }
  } else {
    //当totalCounts是奇数时
    let nums = Math.ceil(totalCounts / 2); // nums初始化为数字总数的一半（向上取整）
    let i = 0;
    while (nums > 0) {
      nums -= count[i]; // 不断地减去每个数字的个数

      //当nums减到<=0 时，我们已经过了中位数或者到达了中位数。此时当前的索引i就代表着中位数
      if (nums <= 0) {
        median = i;
        break;
      }
      i++;
    }
  }

  return [minimum, maximum, mean, median, mode];
};
