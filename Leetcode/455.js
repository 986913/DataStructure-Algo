/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)

var findContentChildren = function (g, s) {
  let result = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let index = s.length - 1; // 用了一个index来控制饼干数组的遍历，遍历饼干并没有再起一个for循环，而是采用自减的方式，这也是常用的技巧。

  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      result++;
      index--;
    }
  }

  return result;
};

/*
为了满足更多的小孩，就不要造成饼干尺寸的浪费。大尺寸的饼干既可以满足胃口大的孩子也可以满足胃口小的孩子，那么就应该优先满足胃口大的。

这里的局部最优就是大饼干喂给胃口大的，充分利用饼干尺寸喂饱一个，全局最优就是喂饱尽可能多的小孩。

可以尝试使用贪心策略，先将饼干数组和小孩数组排序。然后从后向前遍历小孩数组，用大饼干优先满足胃口大的，并统计满足小孩数量。
*/
