/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC77变形题 ******************************/

var subsets = function (nums) {
  let result = [];
  const traversal = (arr, curPath, startIdx) => {
    //前序位置：点
    result.push([...curPath]);

    /* 不同点：(排列permute)类问题i从0开始，          --> i从   0    开始就是为了要重复 
    (组合combine/子集类subsets)问题是从startidx开始！ --> i从startIdx开始就是为了防止重复 
    */
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]); //树枝上 做选择
      traversal(arr, curPath, (startIdx += 1));
      curPath.pop(); // 树枝上 撤销选择
    }

    //后序位置： 点
  };

  traversal(nums, [], 0);
  return result;
};
