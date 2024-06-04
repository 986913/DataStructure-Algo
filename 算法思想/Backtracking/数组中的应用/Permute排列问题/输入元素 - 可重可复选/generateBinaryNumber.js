/*
  generateBinaryNumber(1)结果是： ['0', '1']
  generateBinaryNumber(2)结果是： ['00', '01', '10', '11']
  generateBinaryNumber(3)结果是： ['000', '001', '010', '011', '100', '101', '110', '111']
*/

/*************************** DFS(遍历思想) -- 2叉树的回溯 *************************************/

// 树的宽度是2
const generateBinaryNumber = (n) => {
  let result = [];
  const traversal = (n, curPath) => {
    //收集结果
    if (n === 0) {
      result.push(curPath.join(''));
      return;
    }

    for (let i = 0; i < 2; i++) {
      curPath.push(i);
      traversal(n - 1, curPath);
      curPath.pop();
    }
  };

  traversal(n, []);
  return result;
};
