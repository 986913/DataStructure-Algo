/*
generateBinaryNumber(3)结果是：
  "000"
  "001"
  "010"
  "011"
  "100"
  "101"
  "110"
  "111"
*/

/*************************** N叉树的回溯 *************************************/
const generateBinaryNumber = (n, path = []) => {
  //到达叶子节点
  if (n === 0) {
    // 将路径转换为二进制数字并打印
    console.log(path.join(''));
    return;
  }

  for (let i = 0; i < 2; i++) {
    //前序位置，进入节点
    path.push(i);
    //递归子节点
    generateBinaryNumber(n - 1, path);
    //后序位置
    path.pop();
  }
};
