/**
 * @param {number[]} nums
 * @return {string[]}
 */
/*****************************  Solution: Run Length Eeconding  ******************************/
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let chunks = [];
  let startChar = nums[0]; // 记录当前块的起始数值, 类似counts

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      continue;
    } else {
      let endChar = nums[i - 1]; // 块的终点就是上一个元素
      if (startChar === endChar) {
        chunks.push(startChar.toString());
      } else {
        chunks.push(`${startChar}->${endChar}`);
      }

      startChar = nums[i]; // 开启下一个新块, 类似 reset counts
    }
  }

  return chunks;
};
