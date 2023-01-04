/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html#%E5%9B%9E%E6%BA%AF%E6%B3%95%E4%B8%89%E9%83%A8%E6%9B%B2

/* ------------------------------Backtracking 模版👍 ------------------------------------------ */
// n是树的宽度， k控制树的深度

var combine = function (n, k) {
  const result = [];
  const path = [];

  //1.递归函数的返回值void, 参数: n, k, startIdx
  const backtracking = (n, k, startIdx) => {
    //2.确定递归终止条件
    if (path.length === k) {
      result.push([...path]); //收割结果
      return;
    }
    //3.单层递归的逻辑：递归纵向遍历，for循环横向遍历（n是树的宽度）
    for (let i = startIdx; i <= n; i++) {
      path.push(i); // 处理节点
      backtracking(n, k, i + 1); // 递归： startIdx变成i+1
      path.pop(); // 回溯
    }
  };

  backtracking(n, k, 1);
  return result;
};

// -------------剪枝后👍------------------------------------------------------------
var combine = function (n, k) {
  const result = [];
  const path = [];

  const backtracking = (n, k, startIdx) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    //剪枝
    for (let i = startIdx; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(n, k, i + 1);
      path.pop();
    }
  };

  backtracking(n, k, 1);
  return result;
};

/* reference */
// https://www.bilibili.com/video/BV1ti4y1L7cv/?spm_id_from=333.788&vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
