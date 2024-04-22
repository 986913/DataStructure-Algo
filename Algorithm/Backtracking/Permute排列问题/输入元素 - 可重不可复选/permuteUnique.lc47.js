/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC46, 40, 90 变形题*****************************
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
  nums.sort((a, b) => a - b); // <-- diff is here
  let result = [];
  let used = new Array(nums.length).fill(false);

  const traversal = (arr, curPath, used) => {
    //说明到了叶子
    if (curPath.length === arr.length) {
      result.push([...curPath]);
      return;
    }
    //不同点：排列问题i从0开始，  组合类问题是从startidx开始！！
    for (let i = 0; i < arr.length; i++) {
      // 树枝上去重
      if (used[i] === true) continue;
      //used[i-1]===false保证了相同元素在排列中的相对位置保持不变：
      if (i > 0 && arr[i] === arr[i - 1] && used[i - 1] === false) continue; //<--- diff is here: 树层上去重，如果前面的相邻相等元素没有用过，则跳过

      curPath.push(arr[i]);
      used[i] = true;
      traversal(arr, curPath, used);
      curPath.pop();
      used[i] = false;
    }
  };

  traversal(nums, [], used);
  return result;
};
