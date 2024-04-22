/****************** Combination/Subset (输入元素无重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架） *******************/
const wrapper = (nums) => {
  const result = [];

  const traversal = (arr, curPath, startIdx) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //组合/子集类问题都是从startIdx开始
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]);
      traversal(arr, curPath, i + 1);
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};

/*************************** Permute (输入元素无重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架）**********************/
const wrapper = (nums) => {
  const result = [];
  let used = [];

  const traversal = (arr, curPath, used) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //排序permute类问题都是从0开始
    for (let i = 0; i < arr.length; i++) {
      if (used[i] === true) continue; //剪枝逻辑

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

/****************** Combination/Subset (输入元素可重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架） *******************/
const wrapper = (nums) => {
  nums.sort((a, b) => a - b); // 先排序！
  const result = [];

  const traversal = (arr, curPath, startIdx) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //组合/子集类问题都是从startIdx开始
    for (let i = startIdx; i < arr.length; i++) {
      if (i > startIdx && arr[i] === arr[i - 1]) continue; //箭枝逻辑，跳过值相同的相邻树枝

      curPath.push(arr[i]);
      traversal(arr, curPath, i + 1);
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};

/*************************** Permute (输入元素可重不可复选) - Backtracking抽象模版(类似于 多叉树遍历框架）**********************/
const wrapper = (nums) => {
  nums.sort((a, b) => a - b); // 先排序！
  const result = [];
  let used = [];

  const traversal = (arr, curPath) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //排序permute类问题都是从0开始
    for (let i = 0; i < arr.length; i++) {
      if (used[i] === true) continue; //剪枝逻辑
      if (i > 0 && arr[i] === arr[i - 1]) continue; //箭枝逻辑，固定相同的元素在排列中的相对位置

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

/****************** Combination/Subset (输入元素无重可复选) - Backtracking抽象模版(类似于 多叉树遍历框架） *******************/
const wrapper = (nums) => {
  const result = [];

  const traversal = (arr, curPath, startIdx) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //组合/子集类问题都是从startIdx开始
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]);
      traversal(arr, curPath, i); // 参数是i，不再是i+1了！
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};

/*************************** Permute (输入元素无重可复选) - Backtracking抽象模版(类似于 多叉树遍历框架）**********************/
const wrapper = (nums) => {
  const result = [];

  const traversal = (arr, curPath) => {
    if (终止条件) {
      result.push([...curPath]);
      return;
    }

    //排序permute类问题都是从0开始, 这个情况不需要used数组了
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]);
      traversal(arr, curPath);
      curPath.pop();
    }
  };

  traversal(nums, []);
  return result;
};
