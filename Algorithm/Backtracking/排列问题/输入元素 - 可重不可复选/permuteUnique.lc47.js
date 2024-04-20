/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) *****************************
  输入: [1, 1, 2]
  输出: [[1,1,2], [1,2,2], [2,1,1] ]

  为了区分上面的两个1，第二个1用1'表示：

                                        [  ]
                                      /  |🔪   \
                                    1    1'    2
                                  / \   / \   / \
                                1'   2  1  2  1  1'🔪
                                |    |  ｜ ｜ ｜  ｜
                                2    1' 2  1  1'  1
                                        🔪 🔪     🔪

  上述所有全排列有:     [  [1,1',2]  [1,2,1'], [1',1,2], [1',2,1], [2,1,1'], [2,1',1]  ]
  然后在数层上去重🔪后有:[  [1,1',2]  [1,2,1'],  [2,1,1'] ]
  
  因为1和1'是一样的，题要求输出是Unique的，所以最终结果是全排列🔪剪枝后的: [[1,1,2], [1,2,1], [2,1,1] ]
  ******************************************************************************************/

var permuteUnique = function (nums) {
  const result = [];
  const path = [];

  nums.sort((a, b) => a - b); //<--- diff is here, 记得要sort
  const used = new Array(nums.length).fill(false);

  const backtracking = (nums, used) => {
    //说明到了叶子
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    //不同点：排列问题i从0开始，  组合类问题是从startidx开始！！
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // 树枝上去重
      //保证了相同元素在排列中的相对位置保持不变：
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue; //<--- diff is here: 树层上去重，如果前面的相邻相等元素没有用过，则跳过

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
