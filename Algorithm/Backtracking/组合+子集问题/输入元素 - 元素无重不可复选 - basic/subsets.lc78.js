/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC77变形题 **************************
  输入:  nums = [1,2,3]
  输出:  [[1,2,3], [1,2], [1,3], [2,3], [3], [2], [1], [] ]

                                        [  ]
                                      /  |   \  
                                    1    2    3
                                  / \    |    
                                2   3    3          
                                |      
                                3     

  上述所有全组合有: [[1,2,3], [1,2], [1,3], [2,3], [3], [2], [1], [] ]
************************************************************************************************/

var subsets = function (nums) {
  let result = [];

  const traversal = (arr, curPath, startIdx) => {
    //前序位置：点,
    result.push([...curPath]); //<---- diff is here: 每个节点的值都是一个子集

    /* 不同点：
      (排列permute)类问题i从0开始:                  --> i从   0    开始就是为了要result组合重复,因为order matters.      eg: ✅[1,2,3], ✅[3,2,1] etc
      (组合combine/子集类subsets)是从startidx开始！ --> i从startIdx开始就是为了防止result组合重复,因为order not matters. eg: ✅[1,2,3], ❌[3,2,1] etc. startIdx在这里充当了类似于used数组的角色， 使用startIdx都会跳过前面已经使用过的数字
    */
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]); //树枝上 做选择
      traversal(arr, curPath, i + 1);
      curPath.pop(); // 树枝上 撤销选择
    }

    //后序位置： 点
  };

  traversal(nums, [], 0);
  return result;
};
