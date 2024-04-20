/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC78变形题 ******************************/

// n是树的宽度， k控制树的深度
var combine = function (n, k) {
  let nums = Array.from({ length: n }).map((_, index) => index + 1); // <-- diff is here,  n生成[1，2...n]
  let result = [];

  const traversal = (arr, curPath, startIdx) => {
    // 前序位置：点,  diff is here: 只收集第K层的子集
    if (curPath.length === k) {
      result.push([...curPath]);
    }

    /* 不同点：
    (排列permute)类问题i从0开始:                  --> i从   0    开始就是为了要result组合重复,因为order matters.      eg: ✅[1,2,3], ✅[3,2,1] etc
    (组合combine/子集类subsets)是从startidx开始！ --> i从startIdx开始就是为了防止result组合重复,因为order not matters. eg: ✅[1,2,3], ❌[3,2,1] etc
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
