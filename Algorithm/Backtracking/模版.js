

/*************************** Backtracking 抽象模版 （类似于 多叉树遍历框架）**************************/

const wrapper = (nums) => {
  const result = []; // 二维数组数组结构保存所有路径

  const traversal = (arr, curPath) => {
    if(终止条件){
      result.push([...curPath]); // update result
      return;
    }

    for(选择：本层选择列表/树中节点孩子的数量){
      做选择;  //在for循环里头, 递归之前做选择     eg:curPath.push(arr[i])
      traversal(路径，选择列表); // 递归
      回溯，撤销选择 //在for循环里头，递归之后撤销选择  eg: curPath.pop()
    }
  }

  traversal(nums, [])
  return result;
}