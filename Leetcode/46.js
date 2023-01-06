/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* ----------------------------- 👍 用 Backtracking 模版 ----------------------------------- */

var permute = function (nums) {
  const result = [];
  const path = [];
  const used = new Array(nums.length).fill(false); //used用来标记用过的元素

  const backtracking = (nums, used) => {
    //在叶子节点们上收集节点：
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    // 注意i从0开始，不是startidx了
    for (let i = 0; i < nums.length; i++) {
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
