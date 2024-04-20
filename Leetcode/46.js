/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) *****************************
  时间复杂度为： O(n^2 * n！)  其中n为nums的长度

  输入: [1, 2, 3]
  输出: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]

                                        [  ]
                                      /  |   \
                                    1    2    3
                                  / \   / \   / \
                                2   3  1  3  1  2
                                |   |  ｜ ｜ ｜  ｜
                                3   2  3  1  2  1
                                              

  上述所有全排列有: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
******************************************************************************************/

var permute = function (nums) {
  let result = [];
  let used = new Array(nums.length).fill(false); //used用来标记用过的元素

  const traversal = (arr, curPath, used) => {
    //说明到了叶子
    if (curPath.length === nums.length) {
      result.push([...curPath]);
      return;
    }

    /* 不同点：
      (排列permute)类问题i从0开始:                  --> i从   0    开始就是为了要result组合重复,因为order matters.      eg: ✅[1,2,3], ✅[3,2,1] etc
      (组合combine/子集类subsets)是从startidx开始！ --> i从startIdx开始就是为了防止result组合重复,因为order not matters. eg: ✅[1,2,3], ❌[3,2,1] etc
    */
    //前序位置
    for (let i = 0; i < arr.length; i++) {
      if (used[i] === true) continue; // 树枝上去重(排除不合法的选择)，跳过已经在路径中的元素

      curPath.push(arr[i]); //在树枝上做选择
      used[i] = true; //在树枝上做选择

      traversal(arr, curPath, used);

      curPath.pop(); //回溯，在树枝上撤销选择
      used[i] = false; //回溯，在树枝上撤销选择
    }
    //后序位置
  };

  traversal(nums, [], used);
  return result;
};
