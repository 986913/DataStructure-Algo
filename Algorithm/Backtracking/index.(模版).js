

/**
 * ----------------------- backtracking 抽象模版 -----------------------
 */

// main function: 
const anyFunctionWrapper = () => {
  const result = []; // 二维数组数组结构保存所有路径
  const path = []; // 一维数组保存单一路径

  backtracking(参数)
  return result;
}

// backtracking helper functin:
void backtracking (参数) {
      
  if(终止条件){
    存放结果; // update result
    return;
  }

  for(选择：本层集合中元素（树中节点孩子的数量就是集合的大小）){
    处理节点;  // update path etc
    backtracking(路径，选择列表); // 递归
    回溯，撤销处理结果 // update path etc
  }

}