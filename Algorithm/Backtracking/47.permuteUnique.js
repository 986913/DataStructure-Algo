/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* ----------------------------- 👍 用 Backtracking 模版 ----------------------------------- */

var permuteUnique = function (nums) {
  const result = [];
  const path = [];

  nums.sort((a, b) => a - b); //记得要sort
  const used = new Array(nums.length).fill(false); //used用来标记用过的元素

  const backtracking = (nums, used) => {
    //在叶子节点们上收集节点：
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    //不同点：排列问题i从0开始，  组合类问题是从startidx开始！！
    for (let i = 0; i < nums.length; i++) {
      // 树层上去重
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }

      if (used[i]) continue; // 树枝上去重

      path.push(nums[i]);
      used[i] = true;

      backtracking(nums, used);

      path.pop();
      used[i] = false;
    }
  };

  backtracking(nums, used);
  return result;
};
